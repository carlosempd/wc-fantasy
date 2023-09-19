import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  value!: string;
  positions = new FormControl('');
  positionList: string[] = ['Striker', 'Midfielder', 'Defender', 'Goalkeeper'];

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
      position: ['']
    })
  }

}
