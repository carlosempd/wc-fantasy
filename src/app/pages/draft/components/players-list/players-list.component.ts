import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FilterObject } from 'src/app/core/interfaces/utils.interface';
import { FilterService } from 'src/app/core/services/filter.service';
import { DraftDialogComponent } from '../draft-dialog/draft-dialog.component';
import { Observable, Subscription } from 'rxjs';
import { UtilService } from 'src/app/core/services/util.service';
import { GeneralResponse, ResponseData } from 'src/app/core/interfaces/apiFootball.interface';
import { PlayerService } from 'src/app/core/services/player.service';
import { Pagination } from 'src/app/core/interfaces/pagination.interface';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit, OnDestroy, AfterViewInit {
  playersData: ResponseData[] = [];
  dataSource!: MatTableDataSource<ResponseData>;
  displayedColumns: string[] = ['select', 'name', 'position', 'age', 'nationality'];
  selection = new SelectionModel<ResponseData>(true, []);
  subscription: Subscription = new Subscription();
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  players$: Observable<GeneralResponse> = this.playerService.players$;
  isLoading$: Observable<boolean> = this.playerService.isLoading$;
  loadingData = false;

  constructor(
    public dialog: MatDialog,
    private filterService: FilterService,
    private utilService: UtilService,
    private playerService: PlayerService
  ) {}
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.isLoading$.subscribe(isLoad => {
        this.loadingData = isLoad;
      })
    );
    this.subscription.add(
      this.players$
        .subscribe((res: GeneralResponse) => {
          this.resultsLength = res.paging.total*20;
          const cleanedDraftedPlayers = 
            this.playerService.cleanDraftedPlayersFromList(res.response);
          this.loadData(cleanedDraftedPlayers);
          if (res.errors.length) {
            this.utilService.showSnackbar(
              'Something went wrong, try again later',
              'ok',
              1500,
              'error'
            );
          }
        })
      );
    this.subscription.add(
      this.filterService.filterSubject
        .subscribe((filterEvent: FilterObject) => {
          if (filterEvent.name) {
            this.playerService.fetchNewDataPlayers(undefined, filterEvent.name)
          } else {
            this.filter(filterEvent)
          }
        })
      
    );
  }
  ngAfterViewInit(): void {
    this.paginator.page
      .subscribe((pageEvent: PageEvent) => {
      const pageObject: Pagination =  {
        current: pageEvent.pageIndex,
        total: pageEvent.length
      };
      this.playerService.fetchNewDataPlayers(pageObject);
    })
  }

  loadData(playersData: ResponseData[]) {
    this.playersData = Array.from(playersData);
    this.dataSource = new MatTableDataSource<ResponseData>(this.playersData);
    this.playerService.distinctCountries$.next(
      [...new Set(this.playersData.map(element => element.player.nationality))]
    );

    this.dataSource.filterPredicate = (data: ResponseData, filterStr: string) => {      
      return (
        `${ data.player.firstname }${ data.player.lastname }`.toLowerCase().includes(filterStr) ||
        filterStr.includes(data.player.nationality) ||
        filterStr.includes(data.statistics[0].games.position || '-')
      )
    }
  }

  filter(filterObject: FilterObject) {
    const nameStringFilter = filterObject.name?.trim().toLowerCase() || '';
    const positionStringFilter = filterObject.position.toString().replace(',', '');
    const countryStringFilter = filterObject.country.toString().replace(',', '');

    this.dataSource.filter = 
      `${ nameStringFilter }${ positionStringFilter }${ countryStringFilter }`;
  }

  draftSelection() {
    const dialogRef = this.dialog.open(DraftDialogComponent, {
      data: {
        selectedPlayers:  this.selection.selected
      },
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms'
    });

    dialogRef.afterClosed().subscribe( res => {
      if (res) {
        const playersSet = new Set(this.playersData);
        this.selection.selected.forEach(element => {
          playersSet.delete(element);
        });
        this.loadData(Array.from(playersSet));
        this.utilService.showSnackbar(
          'Players drafted succesfully!'
        );
        this.selection.clear();
      }
    });
  }
}
