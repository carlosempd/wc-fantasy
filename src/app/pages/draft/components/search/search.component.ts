import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  value!: string;
  positions = new FormControl('');
  positionList: string[] = ['Striker', 'Midfielder', 'Defender', 'Goalkeeper', 'Coach'];
  countries: string[] = ['Argentina', 'Germany', 'Brazil', 'Spain', 'France'];

  constructor(
    private formBuilder: FormBuilder,
    private filterService: FilterService
  ) {}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
      position: [''],
      country: [''],
    })
  }

  emitfilter() {
    this.filterService.filterSubject.next(this.searchForm.value);
  }

}
