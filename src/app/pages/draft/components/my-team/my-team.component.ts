import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/core/interfaces/player.interface';
import { MockService } from 'src/app/core/services/mock.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent {
  myPlayers: Player[] = [];

  constructor(
    private mockService: MockService,
    private router: Router
  ) {
    this.myPlayers = mockService.getPlayers().slice(0,17);
  }

  goToDraft() {
    this.router.navigate(['draft']);
  }
}
