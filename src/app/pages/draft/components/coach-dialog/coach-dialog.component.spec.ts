import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockService } from 'src/app/core/services/mock.service';

import { CoachDialogComponent } from './coach-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { Coach } from 'src/app/core/interfaces/apiFootball.interface';


describe('CoachDialogComponent', () => {
  let component: CoachDialogComponent;
  let fixture: ComponentFixture<CoachDialogComponent>;
  let mockService: MockService;
  let dialogRef: MatDialogRef<CoachDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachDialogComponent ],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MockService, useValue: { getMockCoaches: () => [] } },
        { provide: MatDialogRef, useValue: { close: () => {} } }
      ]
    })
    .compileComponents();

    // fixture = TestBed.createComponent(CoachDialogComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachDialogComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(MockService);
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when save is called with a non-empty formControl value', () => {
    const mockValue = 'John';
    spyOn(dialogRef, 'close');

    component.formControl.setValue(mockValue);
    component.save();

    expect(dialogRef.close).toHaveBeenCalledWith(mockValue);
  });

});
