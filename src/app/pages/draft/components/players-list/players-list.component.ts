import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/core/interfaces/player.interface';
import { FilterObject } from 'src/app/core/interfaces/utils.interface';
import { FilterService } from 'src/app/core/services/filter.service';
import { MockService } from 'src/app/core/services/mock.service';
import { DraftDialogComponent } from '../draft-dialog/draft-dialog.component';
import { Subscription } from 'rxjs';
import { UtilService } from 'src/app/core/services/util.service';
import { ResponseData } from 'src/app/core/interfaces/apiFootball.interface';

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
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private mockService: MockService,
    private filterService: FilterService,
    private utilService: UtilService
  ) {
    this.loadData(this.mockService.getMockPlayers());
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.filterService.filterSubject
        .subscribe((filterEvent: FilterObject) => this.filter(filterEvent))
    );

    this.dataSource.filterPredicate = (data: ResponseData, filterStr: string) => {      
      return (
        `${ data.player.firstname }${ data.player.lastname }`.toLowerCase().includes(filterStr) ||
        filterStr.includes(data.player.nationality) ||
        filterStr.includes(data.statistics[0].games.position || '-')
      )
    }
  }
  ngAfterViewInit(): void {
    this.loadPaginator();
  }

  loadData(playersData: ResponseData[], loadPaginator: boolean = false) {
    this.playersData = Array.from(playersData);
    this.dataSource = new MatTableDataSource<ResponseData>(this.playersData);
    if (loadPaginator) {
      this.loadPaginator();
    }
  }

  loadPaginator() {
    this.dataSource.paginator = this.paginator;
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
      data: this.selection.selected,
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms'
    });

    dialogRef.afterClosed().subscribe( res => {
      const playersSet = new Set(this.playersData);
      this.selection.selected.forEach(element => {
        playersSet.delete(element);
      });
      this.loadData(Array.from(playersSet), true);
      this.utilService.showSnackbar(
        'Players drafted succesfully!'
      );
      this.selection.clear();
    });
  }
}
