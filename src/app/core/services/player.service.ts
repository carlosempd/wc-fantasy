import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../interfaces/player.interface';
import { UtilService } from './util.service';
import { AppConstants } from 'src/app/shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  draftedPlayersSubject: Subject<Player[]> = new Subject<Player[]>();
  private draftedPlayers: Player[] = [];

  constructor(private utilService: UtilService) { }


  draftPlayers(players: Player[]) {    
    this.draftedPlayers = this.draftedPlayers.concat(players);
    this.utilService.removeFromLocalStorage(AppConstants.MY_PLAYERS_KEY);
    this.utilService.setToLocalStorage(AppConstants.MY_PLAYERS_KEY, JSON.stringify(this.draftedPlayers))
  }
}
