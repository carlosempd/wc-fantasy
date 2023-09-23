import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ItemListModule } from 'src/app/shared/components/item-list/item-list.module';

import { DraftDialogComponent } from './draft-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


describe('DraftDialogComponent', () => {
  let component: DraftDialogComponent;
  let fixture: ComponentFixture<DraftDialogComponent>;
  let dialogRef: MatDialogRef<DraftDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftDialogComponent ],
      imports: [
        ItemListModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    // fixture = TestBed.createComponent(DraftDialogComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when closeDialog is called', () => {
    spyOn(dialogRef, 'close');

    component.closeDialog();

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
