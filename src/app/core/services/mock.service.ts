import { Injectable } from '@angular/core';
import { POSITION, Player } from '../interfaces/player.interface';
import { GeneralResponse, ResponseData } from '../interfaces/apiFootball.interface';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getMockResponse(): GeneralResponse {
    return {
      get: "players",
      parameters: {
        league: "39",
        season: "2022",
        page: "1"
      },
      errors: [],
      results: 20,
      paging: {
        current: 1,
        total: 45
      },
      response: this.getMockPlayers()
    }
  }

  getMockPlayers(): ResponseData[] {
    return [
      {
        player: {
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
        },
        statistics: [
          {
            team: {
              id: 50,
              name: "Manchester City",
              logo: "https://media-4.api-sports.io/football/teams/50.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
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
        },
        statistics: [
          {
            team: {
              id: 45,
              name: "Everton",
              logo: "https://media-4.api-sports.io/football/teams/45.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
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
        },
        statistics: [
          {
            team: {
              id: 33,
              name: "Manchester United",
              logo: "https://media-4.api-sports.io/football/teams/33.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 2281,
          name: "Gary Cahill",
          firstname: "Gary",
          lastname: "Cahill",
          age: 37,
          birth: {
            date: "1985-12-19",
            place: "Dronfield",
            country: "England"
          },
          nationality: "England",
          height: "193 cm",
          weight: "86 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/2281.png"
        },
        statistics: [
          {
            team: {
              id: 35,
              name: "Bournemouth",
              logo: "https://media-4.api-sports.io/football/teams/35.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 2288,
          name: "Daniel Noel Drinkwater",
          firstname: "Daniel Noel",
          lastname: "Drinkwater",
          age: 32,
          birth: {
            date: "1990-03-05",
            place: "Manchester",
            country: "England"
          },
          nationality: "England",
          height: "178 cm",
          weight: "79 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/2288.png"
        },
        statistics: [
          {
            team: {
              id: 49,
              name: "Chelsea",
              logo: "https://media-4.api-sports.io/football/teams/49.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18826,
          name: "Mark Noble",
          firstname: "Mark",
          lastname: "Noble",
          age: 35,
          birth: {
            date: "1987-05-08",
            place: "Canning Town",
            country: "England"
          },
          nationality: "England",
          height: "180 cm",
          weight: "70 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18826.png"
        },
        statistics: [
          {
            team: {
              id: 48,
              name: "West Ham",
              logo: "https://media-4.api-sports.io/football/teams/48.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 158696,
          name: "F. Burns",
          firstname: "Finley Jack",
          lastname: "Burns",
          age: 19,
          birth: {
            date: "2003-06-17",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "185 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/158696.png"
        },
        statistics: [
          {
            team: {
              id: 50,
              name: "Manchester City",
              logo: "https://media-4.api-sports.io/football/teams/50.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 162517,
          name: "L. Dendoncker",
          firstname: "Lars",
          lastname: "Dendoncker",
          age: 21,
          birth: {
            date: "2001-04-03",
            place: null,
            country: "Belgium"
          },
          nationality: "Belgium",
          height: "188 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/162517.png"
        },
        statistics: [
          {
            team: {
              id: 51,
              name: "Brighton",
              logo: "https://media-4.api-sports.io/football/teams/51.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 283289,
          name: "A. Raikhy",
          firstname: "Arjan",
          lastname: "Singh Raikhy",
          age: 20,
          birth: {
            date: "2002-10-20",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/283289.png"
        },
        statistics: [
          {
            team: {
              id: 66,
              name: "Aston Villa",
              logo: "https://media-4.api-sports.io/football/teams/66.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 284247,
          name: "H. Blair",
          firstname: "Harvey",
          lastname: "Blair",
          age: 19,
          birth: {
            date: "2003-09-14",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/284247.png"
        },
        statistics: [
          {
            team: {
              id: 40,
              name: "Liverpool",
              logo: "https://media-4.api-sports.io/football/teams/40.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Attacker",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 284464,
          name: "M. Cadogan",
          firstname: "Maliq Anthony",
          lastname: "Cadogan",
          age: 18,
          birth: {
            date: "2004-02-25",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/284464.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-4.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 288115,
          name: "James Storer",
          firstname: "James",
          lastname: "Storer",
          age: null,
          birth: {
            date: null,
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/288115.png"
        },
        statistics: [
          {
            team: {
              id: 39,
              name: "Wolves",
              logo: "https://media-4.api-sports.io/football/teams/39.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 291022,
          name: "Joshua Keeley",
          firstname: "Joshua",
          lastname: "Keeley",
          age: 19,
          birth: {
            date: "2003-05-17",
            place: null,
            country: "Republic of Ireland"
          },
          nationality: "Republic of Ireland",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/291022.png"
        },
        statistics: [
          {
            team: {
              id: 47,
              name: "Tottenham",
              logo: "https://media-4.api-sports.io/football/teams/47.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 293162,
          name: "J. Raymond",
          firstname: "Jadan",
          lastname: "Raymond",
          age: 19,
          birth: {
            date: "2003-10-15",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/293162.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-4.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 293167,
          name: "J. Sheridan",
          firstname: "Joe",
          lastname: "Sheridan",
          age: 19,
          birth: {
            date: "2003-12-10",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/293167.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-4.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 305732,
          name: "T. Wilson-Brown",
          firstname: "Thomas",
          lastname: "Wilson-Brown",
          age: 18,
          birth: {
            date: "2004-10-05",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/305732.png"
        },
        statistics: [
          {
            team: {
              id: 46,
              name: "Leicester",
              logo: "https://media-4.api-sports.io/football/teams/46.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 328101,
          name: "T. Fredricson",
          firstname: "Tyler",
          lastname: "Fredricson",
          age: 17,
          birth: {
            date: "2005-02-23",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/328101.png"
        },
        statistics: [
          {
            team: {
              id: 33,
              name: "Manchester United",
              logo: "https://media-4.api-sports.io/football/teams/33.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 344908,
          name: "M. Vigor",
          firstname: "Matthew",
          lastname: "Vigor",
          age: 18,
          birth: {
            date: "2004-07-29",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/344908.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-4.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 350590,
          name: "T. Gidaree",
          firstname: "Tarik",
          lastname: "Gidaree",
          age: 19,
          birth: {
            date: "2003-05-08",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/350590.png"
        },
        statistics: [
          {
            team: {
              id: 35,
              name: "Bournemouth",
              logo: "https://media-4.api-sports.io/football/teams/35.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 350627,
          name: "J. Addae",
          firstname: "Joshua",
          lastname: "Addae",
          age: null,
          birth: {
            date: null,
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/350627.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-4.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2022
            },
            games: {
              appearences: null,
              lineups: null,
              minutes: null,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: null,
              out: null,
              bench: null
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: null,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: null,
              yellowred: null,
              red: null
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      }
    ]
  }
}
