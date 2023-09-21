import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
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
  private draftedPlayers: ResponseData[] = [];
  public players$: Observable<GeneralResponse> = this.getPlayers().pipe(
    shareReplay(1)
  )

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

  private getPlayers(pagination?: Pagination): Observable<GeneralResponse> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.apiKey,
			'X-RapidAPI-Host': environment.apiHost
    });

    // Since api seems not to take HttpParams
    // params are passed as string in url
    let assemblyParamsString =
      `?league=${ AppConstants.WORLD_CUP_ID }&season=${ AppConstants.SEASON }`;
    if (pagination) {
      assemblyParamsString = assemblyParamsString.concat(`&page=${ pagination.current + 1 }`)
    }

    return this.apiService.get(
      `${ environment.apiFootballUrl }/players${ assemblyParamsString }`,
      undefined,
      headers
    )
  }
}
