import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';
import { BehaviorSubject, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { PlayerService } from 'src/app/core/services/player.service';
import { UtilService } from 'src/app/core/services/util.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ResponseData } from 'src/app/core/interfaces/apiFootball.interface';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppConstants } from 'src/app/shared/app.constants';
import { Player } from 'src/app/core/interfaces/player.interface';


describe('PlayerService', () => {
	let service: PlayerService;
  let utilService: UtilService;
  let apiService: ApiService;
  let httpMock: HttpTestingController;
	let player1: Player = {
		id: 623,
		name: "B. Mendy",
		firstname: "Benjamin",
		lastname: "Mendy",
		age: 28,
		birth: {
			date: "1994-07-17",
			place: "Longjumeau",
			country: "France"
		},
		nationality: "France",
		height: "185 cm",
		weight: "85 kg",
		injured: false,
		photo: "https://media-4.api-sports.io/football/players/623.png"
	}
	let player2: Player = {
		id: 630,
		name: "F. Delph",
		firstname: "Fabian",
		lastname: "Delph",
		age: 33,
		birth: {
			date: "1989-11-21",
			place: "Bradford",
			country: "England"
		},
		nationality: "England",
		height: "174 cm",
		weight: "60 kg",
		injured: false,
		photo: "https://media-4.api-sports.io/football/players/630.png"
	}
	let player3: Player = {
		id: 883,
		name: "Lee Grant",
		firstname: "Lee",
		lastname: "Grant",
		age: 39,
		birth: {
			date: "1983-01-27",
			place: "Hemel Hempstead",
			country: "England"
		},
		nationality: "England",
		height: "193 cm",
		weight: "83 kg",
		injured: false,
		photo: "https://media-4.api-sports.io/football/players/883.png"
	}

	beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
				HttpClientTestingModule,
				MatSnackBarModule
			],
      providers: [
				PlayerService,
				UtilService,
				ApiService
			]
    });
    service = TestBed.inject(PlayerService);
    utilService = TestBed.inject(UtilService);
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

	afterEach(() => {
    httpMock.verify();
  });

  it('should check if two elements have the same id', () => {

    const result = service.isPresentId(player1, player1);

    expect(result).toBe(true);
  });


	it('should draft players and update local storage', () => {
    const players: ResponseData[] = [
      { 
				player: { ...player1 },
				statistics: [] 
			},
      { 
				player: { ...player2 },
				statistics: []
		}
    ];

    spyOn(utilService, 'removeFromLocalStorage');
    spyOn(utilService, 'setToLocalStorage');

    service.draftPlayers(players);

    // expect(service.draftedPlayers).toEqual(players);
    expect(utilService.removeFromLocalStorage).toHaveBeenCalledWith(AppConstants.MY_PLAYERS_KEY);
    expect(utilService.setToLocalStorage).toHaveBeenCalledWith(AppConstants.MY_PLAYERS_KEY, JSON.stringify(players));
  });

	it('should clean drafted players from list', () => {
    const players: ResponseData[] = [
      { player: { ...player1 }, statistics: [] },
      { player: { ...player2 }, statistics: [] },
      { player: { ...player3 }, statistics: [] }
    ];
    service.draftPlayers([
		{ player: { ...player2 }, statistics: [] }
	]);
		
    const result = service.cleanDraftedPlayersFromList(players);

    expect(result).toEqual(
			[
				{ player: { ...player1 } ,statistics: [] },
				{ player: { ...player3 }, statistics: [] }
			]);
  });

})
