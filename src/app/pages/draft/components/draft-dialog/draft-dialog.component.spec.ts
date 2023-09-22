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
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
