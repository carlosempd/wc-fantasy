import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResponseData } from 'src/app/core/interfaces/apiFootball.interface';
import { POSITION } from 'src/app/core/interfaces/player.interface';
import { UtilService } from 'src/app/core/services/util.service';
import { AppConstants, Messages } from 'src/app/shared/app.constants';
import { CoachDialogComponent } from '../coach-dialog/coach-dialog.component';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  myPlayers: ResponseData[] = [];
  defenders: ResponseData[] = [];
  midfielders: ResponseData[] = [];
  strikers: ResponseData[] = [];
  goalkeepers: ResponseData[] = [];
  coachName: string = '';
  subscription: Subscription = new Subscription();
  warningMessage = Messages.MISSING_PLAYERS;

  constructor(
    private router: Router,
    private utilService: UtilService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {    
    this.myPlayers = this.utilService
      .getFromLocalStorage(AppConstants.MY_PLAYERS_KEY) || [];

    this.coachName = 
      this.utilService
        .getFromLocalStorage(AppConstants.COACH_KEY).name || '';

    this.arrangePlayers()
  }

  arrangePlayers() {
    this.myPlayers.forEach(element => {
      switch (element.statistics[0].games.position) {
        case POSITION.def:
          this.defenders.push(element);
          break;
        case POSITION.mid:
          this.midfielders.push(element);
          break;
        case POSITION.str:
          this.strikers.push(element);
          break;
        case POSITION.gk:
          this.goalkeepers.push(element);
          break;   
        default:
          break;
      }
    })
  }

  goToDraft() {
    this.router.navigate(['draft']);
  }

  emptyTeam() {
    this.myPlayers = [];
    this.defenders = [];
    this.midfielders = [];
    this.strikers = [];
    this.goalkeepers = [];
    this.coachName = '';
    this.utilService.removeFromLocalStorage(AppConstants.MY_PLAYERS_KEY);
    this.utilService.removeFromLocalStorage(AppConstants.COACH_KEY);
  }

  checkTeamLength(): boolean {
    return this.defenders.length < AppConstants.MIN_DEFENDERS
      || this.midfielders.length < AppConstants.MIN_MIDFIELDERS
      || this.strikers.length < AppConstants.MIN_STRIKERS
      || this.goalkeepers.length < AppConstants.MIN_GOALKEEPERS
      || !this.coachName
  }

  openPickCoachDialog() {
    const coachDialogRef = this.dialog.open(CoachDialogComponent);

    coachDialogRef.afterClosed().subscribe((coachName: string) => {
      if (coachName) { 
        this.coachName = coachName;
        this.utilService.setToLocalStorage(
          AppConstants.COACH_KEY,
          JSON.stringify({
            name: this.coachName
          })
        );
      }
    })
  }
}
