import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDialogComponent } from './draft-dialog.component';

describe('DraftDialogComponent', () => {
  let component: DraftDialogComponent;
  let fixture: ComponentFixture<DraftDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftDialogComponent ]
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
