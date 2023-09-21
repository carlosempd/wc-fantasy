import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player } from '../interfaces/player.interface';
import { UtilService } from './util.service';
import { AppConstants } from 'src/app/shared/app.constants';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Pagination } from '../interfaces/pagination.interface';
import { GeneralResponse, ResponseData } from '../interfaces/apiFootball.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  draftedPlayersSubject: Subject<Player[]> = new Subject<Player[]>();
  private draftedPlayers: ResponseData[] = [];

  constructor(
    private utilService: UtilService,
    private apiService: ApiService
  ) { }


  draftPlayers(players: ResponseData[]) {    
    this.draftedPlayers = this.draftedPlayers.concat(players);
    this.utilService.removeFromLocalStorage(AppConstants.MY_PLAYERS_KEY);
    this.utilService.setToLocalStorage(AppConstants.MY_PLAYERS_KEY, JSON.stringify(this.draftedPlayers))
  }

  getPlayers(pagination?: Pagination): Observable<GeneralResponse> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.apiKey,
			'X-RapidAPI-Host': environment.apiHost
    });
    return this.apiService.get(
      environment.apiFootballUrl,
      undefined,
      headers
    )
  }
}
