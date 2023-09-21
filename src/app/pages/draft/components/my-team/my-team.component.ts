import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { POSITION, Player } from 'src/app/core/interfaces/player.interface';
import { MockService } from 'src/app/core/services/mock.service';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  myPlayers: Player[] = [];
  defenders: Player[] = [];
  midfielders: Player[] = [];
  strikers: Player[] = [];
  goalkeepers: Player[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private mockService: MockService,
    private router: Router,
    private playerService: PlayerService,
  ) {}
  ngOnInit(): void {    
    this.subscription.add(
      this.playerService.draftedPlayersSubject.subscribe(list => {
        this.myPlayers = list;
        this.arrangePlayers();
      })
    );
    this.arrangePlayers()
  }

  arrangePlayers() {
    this.myPlayers.forEach(element => {
      switch (element.position) {
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
}
