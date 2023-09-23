import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamComponent } from './my-team.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';
import { By } from '@angular/platform-browser';

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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the "empty-team-btn" button with the correct label and icon', () => {
    component.myPlayers = [
      {
        player: {
          id: 0,
          name: '',
          firstname: '',
          lastname: '',
          age: null,
          birth: {
            date: null,
            place: null,
            country: null
          },
          nationality: '',
          height: null,
          weight: null,
          injured: false,
          photo: ''
        },
        statistics: []
      }
    ]
    const emptyTeamButton = fixture.debugElement.query(By.css('.empty-team-btn'));
    expect(
      emptyTeamButton.nativeElement.textContent.trim()).toContain('Empty my team'
    );
    expect(
      emptyTeamButton.nativeElement.querySelector('mat-icon').textContent.trim()
    ).toBe('delete_forever');
  });

  it('should call the "emptyTeam()" function when the "empty-team-btn" button is clicked', () => {
    spyOn(component, 'emptyTeam');
    const emptyTeamButton = fixture.debugElement.query(By.css('.empty-team-btn'));
    emptyTeamButton.nativeElement.click();
    expect(component.emptyTeam).toHaveBeenCalled();
  });

  it('should render the "goToDraft()" button with the correct label and icon', () => {
    const goToDraftButton = fixture.debugElement.query(By.css('.draft-btn'));
    expect(
      goToDraftButton.nativeElement.textContent.trim()).toContain('Go to draft');
    expect(goToDraftButton.nativeElement.querySelector('mat-icon').textContent.trim()).toBe('handshake');
  });

  it('should call the "goToDraft()" function when the "goToDraft()" button is clicked', () => {
    spyOn(component, 'goToDraft');
    const goToDraftButton = fixture.debugElement.query(By.css('.draft-btn'));
    goToDraftButton.nativeElement.click();
    expect(component.goToDraft).toHaveBeenCalled();
  });

  it('should render the warning message paragraph when "checkTeamLength()" returns true', () => {
    component.warningMessage = 'Warning message';
    spyOn(component, 'checkTeamLength').and.returnValue(true);
    fixture.detectChanges();
    const warningMessage = fixture.debugElement.query(By.css('.msg-warning'));
    expect(warningMessage.nativeElement.textContent.trim()).toBe('Warning message');
  });

  it('should render the players list when "myPlayers" array has a length greater than 0', () => {
    component.myPlayers = [{
      player: {
        id: 0,
        name: '',
        firstname: '',
        lastname: '',
        age: null,
        birth: {
          date: null,
          place: null,
          country: null
        },
        nationality: '',
        height: null,
        weight: null,
        injured: false,
        photo: ''
      },
      statistics: []
    }];
    fixture.detectChanges();
    const playersList = fixture.debugElement.query(By.css('.players-list'));
    expect(playersList).toBeTruthy();
  });

});
