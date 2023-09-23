import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/core/services/filter.service';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm!: FormGroup;
  value!: string;
  positions = new FormControl('');
  positionList: string[] = ['Attacker', 'Midfielder', 'Defender', 'Goalkeeper'];
  countries: string[] = ['Argentina', 'Germany', 'Brazil', 'Spain', 'France'];
  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private filterService: FilterService,
    private playerService: PlayerService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
      position: [''],
      country: [''],
    });
    this.subscription.add(
      this.playerService.distinctCountries$.subscribe(countries => {
        this.countries = countries
      })
    )
  }

  fetchDataOnClearSearch() {
    this.playerService.fetchNewDataPlayers();
  }

  emitfilter() {
    this.filterService.filterSubject.next(this.searchForm.value);
  }

}
