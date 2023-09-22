import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamComponent } from './my-team.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';

describe('MyTeamComponent', () => {
  let component: MyTeamComponent;
  let fixture: ComponentFixture<MyTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamComponent ],
      imports: [
        MatSnackBarModule,
        MatDialogModule,
        ToolbarModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
