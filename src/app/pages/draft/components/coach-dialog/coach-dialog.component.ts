import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { Coach } from 'src/app/core/interfaces/apiFootball.interface';
import { MockService } from 'src/app/core/services/mock.service';

@Component({
  selector: 'app-coach-dialog',
  templateUrl: './coach-dialog.component.html',
  styleUrls: ['./coach-dialog.component.scss']
})
export class CoachDialogComponent implements OnInit {
  coachList: Coach[] = [];
  formControl = new FormControl('');
  filteredOptions!: Observable<Coach[]>;

  constructor(
    private mockService: MockService,
    public dialogRef: MatDialogRef<CoachDialogComponent>,
  ) {
    this.coachList = this.mockService.getMockCoaches();
  }
  ngOnInit(): void {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Coach[] {
    const filterValue = value.toLowerCase();

    return this.coachList
      .filter(option => {
        const coachToValidate = `${ option.firstname } ${ option.lastname }`;
        return coachToValidate.toLowerCase().includes(filterValue)
      });
  }

  save() {
    if (this.formControl.value) {
      this.dialogRef.close(this.formControl.value);
    }
  }

}
