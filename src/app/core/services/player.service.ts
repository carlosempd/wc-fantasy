import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  draftedPlayers: Subject<Player[]> = new Subject<Player[]>();

  constructor() { }
}
