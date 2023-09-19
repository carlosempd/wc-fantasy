import { Component } from '@angular/core';
import { Player } from 'src/app/core/interfaces/player.interface';
import { MockService } from 'src/app/core/services/mock.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {
  players: Player[] = [];
  displayedColumns: string[] = ['name', 'position', 'age', 'nationality']

  constructor(private mockService: MockService) {
    this.players = this.mockService.getPlayers();
  }

}
