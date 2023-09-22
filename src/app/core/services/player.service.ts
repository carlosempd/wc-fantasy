import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, mergeMap, shareReplay, tap } from 'rxjs';
import { UtilService } from './util.service';
import { AppConstants } from 'src/app/shared/app.constants';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Pagination } from '../interfaces/pagination.interface';
import { GeneralResponse, ResponseData } from '../interfaces/apiFootball.interface';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private draftedPlayers: ResponseData[] = [];
  private _playersData$ = new BehaviorSubject<void>(undefined);
  private playersRequest$: Observable<GeneralResponse> = this.getPlayers();
  public isLoading$ = new BehaviorSubject<boolean>(false);
  public distinctCountries$ = new BehaviorSubject<string[]>([]);
  public players$ = this._playersData$.pipe(
    tap(() => this.isLoading$.next(true)),
    mergeMap(() => this.playersRequest$),
    tap(() => this.isLoading$.next(false)),
    shareReplay(1)
  );

  constructor(
    private utilService: UtilService,
    private apiService: ApiService
  ) { }


  draftPlayers(players: ResponseData[]) {   
    this.draftedPlayers = this.draftedPlayers.concat(players);
    this.utilService.removeFromLocalStorage(AppConstants.MY_PLAYERS_KEY);
    this.utilService.setToLocalStorage(
      AppConstants.MY_PLAYERS_KEY,
      JSON.stringify(this.draftedPlayers)
    );
  }

  cleanDraftedPlayersFromList(players: ResponseData[]): ResponseData[] {
    return players.filter(el => {
      return !this.draftedPlayers.some(el2 => el2.player.id == el.player.id)
    })
  }

  isPresentId(obj1: Player, obj2: Player): boolean {
    return obj1.id === obj2.id
  }

  fetchNewDataPlayers(pagination?: Pagination, searchName?: string) {
    this.playersRequest$ = this.getPlayers(pagination, searchName);
    this._playersData$.next();
  }

  private getPlayers(pagination?: Pagination, searchName?: string): Observable<GeneralResponse> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.apiKey,
			'X-RapidAPI-Host': environment.apiHost
    });
    
    // Since api seems not to take HttpParams
    // params are passed as string in url
    let assemblyParamsString =
      `?league=${ AppConstants.WORLD_CUP_ID }&season=${ AppConstants.SEASON }`;
    if (pagination) {
      assemblyParamsString = assemblyParamsString.concat(
        `&page=${ pagination.current + 1 }`
      )
    }
    if (searchName) {
      assemblyParamsString = assemblyParamsString.concat(
        `&search=${ searchName }`
      );
    }

    return this.apiService.get(
      `${ environment.apiFootballUrl }/players${ assemblyParamsString }`,
      undefined,
      headers
    )
  }
}
