import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DraftComponent } from './draft.component';
import { DraftModule } from './draft.module';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


describe('DraftComponent', () => {
  let component: DraftComponent;
  let fixture: ComponentFixture<DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftComponent ],
      imports: [
        DraftModule,
        MatSnackBarModule,
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
