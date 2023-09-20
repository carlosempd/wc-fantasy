import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  draftedPlayersSubject: Subject<Player[]> = new Subject<Player[]>();
  private draftedPlayers: Player[] = [];

  constructor() { }


  draftPlayers(players: Player[]) {
    const allDrafted = this.draftedPlayers.concat(players);
    this.draftedPlayersSubject.next(allDrafted);
  }
}
