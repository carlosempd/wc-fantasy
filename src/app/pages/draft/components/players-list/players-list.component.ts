import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/core/interfaces/player.interface';
import { FilterObject } from 'src/app/core/interfaces/utils.interface';
import { FilterService } from 'src/app/core/services/filter.service';
import { MockService } from 'src/app/core/services/mock.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit, OnDestroy, AfterViewInit {
  players: Player[] = [];
  dataSource!: MatTableDataSource<Player>;
  displayedColumns: string[] = ['select', 'name', 'position', 'age', 'nationality'];
  selection = new SelectionModel<Player>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private mockService: MockService,
    private filterService: FilterService
  ) {
    this.players = this.mockService.getPlayers();
    this.dataSource = new MatTableDataSource<Player>(this.players);
  }
  ngOnDestroy(): void {
    this.filterService.filterSubject.unsubscribe();
  }
  ngOnInit(): void {
    this.filterService.filterSubject
      .subscribe((filterEvent: FilterObject) => this.filter(filterEvent));

    this.dataSource.filterPredicate = (data: Player, filterStr: string) => {
      return (
        filterStr.includes(data.name) ||
        filterStr.includes(data.nationality) ||
        filterStr.includes(data.position)
      )
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  handleSelection() {
    console.log(this.selection.selected);
  }

  filter(filterObject: FilterObject) {
    const nameStringFilter = filterObject.name?.trim().toLowerCase();
    const positionStringFilter = filterObject.position.toString().replace(',', '');
    const countryStringFilter = filterObject.country.toString().replace(',', '');

    this.dataSource.filter = 
      `${ nameStringFilter }${ positionStringFilter }${ countryStringFilter }`;
  }
}
