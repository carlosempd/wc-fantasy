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
          },
          
        ]
      },
      {
        player: {
          id: 1200,
          name: "B. Ivanović",
          firstname: "Branislav",
          lastname: "Ivanović",
          age: 37,
          birth: {
            date: "1984-02-22",
            place: "Sremska Mitrovica",
            country: "Serbia"
          },
          nationality: "Serbia",
          height: "185 cm",
          weight: "89 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/1200.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-2.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 13,
              lineups: 8,
              minutes: 765,
              number: null,
              position: "Defender",
              rating: "6.566666",
              captain: false
            },
            substitutes: {
              in: 5,
              out: 3,
              bench: 12
            },
            shots: {
              total: 3,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 317,
              key: 1,
              accuracy: 26
            },
            tackles: {
              total: 14,
              blocks: 5,
              interceptions: 8
            },
            duels: {
              total: 58,
              won: 31
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: 4,
              committed: 11
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 3423,
          name: "C. Atsu",
          firstname: "Christian",
          lastname: "Atsu Twasam",
          age: 31,
          birth: {
            date: "1992-01-10",
            place: "Ada Foah",
            country: "Ghana"
          },
          nationality: "Ghana",
          height: "165 cm",
          weight: "65 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/3423.png"
        },
        statistics: [
          {
            team: {
              id: 34,
              name: "Newcastle",
              logo: "https://media-2.api-sports.io/football/teams/34.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 18774,
          name: "W. Morgan",
          firstname: "Wes",
          lastname: "Morgan",
          age: 37,
          birth: {
            date: "1984-01-21",
            place: "Nottingham",
            country: "England"
          },
          nationality: "Jamaica",
          height: "186 cm",
          weight: "101 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/18774.png"
        },
        statistics: [
          {
            team: {
              id: 46,
              name: "Leicester",
              logo: "https://media-3.api-sports.io/football/teams/46.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 3,
              lineups: 0,
              minutes: 15,
              number: null,
              position: "Defender",
              rating: "6.450000",
              captain: false
            },
            substitutes: {
              in: 3,
              out: 0,
              bench: 13
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 5,
              key: null,
              accuracy: 2
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18828,
          name: "R. Snodgrass",
          firstname: "Robert",
          lastname: "Snodgrass",
          age: 36,
          birth: {
            date: "1987-09-07",
            place: "Glasgow",
            country: "Scotland"
          },
          nationality: "Scotland",
          height: "182 cm",
          weight: "82 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/18828.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-3.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 8,
              lineups: 6,
              minutes: 527,
              number: null,
              position: "Midfielder",
              rating: "6.700000",
              captain: false
            },
            substitutes: {
              in: 2,
              out: 3,
              bench: 4
            },
            shots: {
              total: 1,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 132,
              key: 3,
              accuracy: 13
            },
            tackles: {
              total: 17,
              blocks: 2,
              interceptions: 1
            },
            duels: {
              total: 78,
              won: 43
            },
            dribbles: {
              attempts: 8,
              success: 4,
              past: null
            },
            fouls: {
              drawn: 13,
              committed: 8
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 48,
              name: "West Ham",
              logo: "https://media-1.api-sports.io/football/teams/48.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 3,
              lineups: 0,
              minutes: 2,
              number: null,
              position: "Midfielder",
              rating: "6.700000",
              captain: false
            },
            substitutes: {
              in: 3,
              out: 0,
              bench: 11
            },
            shots: {
              total: 1,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 132,
              key: 3,
              accuracy: 13
            },
            tackles: {
              total: 17,
              blocks: 2,
              interceptions: 1
            },
            duels: {
              total: 78,
              won: 43
            },
            dribbles: {
              attempts: 8,
              success: 4,
              past: null
            },
            fouls: {
              drawn: 13,
              committed: 8
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18849,
          name: "J. McArthur",
          firstname: "James",
          lastname: "McFarlane McArthur",
          age: 36,
          birth: {
            date: "1987-10-07",
            place: "Glasgow",
            country: "Scotland"
          },
          nationality: "Scotland",
          height: "178 cm",
          weight: "75 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/18849.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-1.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 18,
              lineups: 17,
              minutes: 1471,
              number: null,
              position: "Midfielder",
              rating: "6.933333",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 6,
              bench: 2
            },
            shots: {
              total: 4,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 2,
              saves: null
            },
            passes: {
              total: 772,
              key: 15,
              accuracy: 35
            },
            tackles: {
              total: 57,
              blocks: 3,
              interceptions: 23
            },
            duels: {
              total: 190,
              won: 106
            },
            dribbles: {
              attempts: 19,
              success: 14,
              past: null
            },
            fouls: {
              drawn: 14,
              committed: 32
            },
            cards: {
              yellow: 3,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18891,
          name: "C. Clark",
          firstname: "Ciaran",
          lastname: "Clark",
          age: 34,
          birth: {
            date: "1989-09-26",
            place: "London",
            country: "England"
          },
          nationality: "Republic of Ireland",
          height: "185 cm",
          weight: "88 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/18891.png"
        },
        statistics: [
          {
            team: {
              id: 34,
              name: "Newcastle",
              logo: "https://media-3.api-sports.io/football/teams/34.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 22,
              lineups: 21,
              minutes: 1893,
              number: null,
              position: "Defender",
              rating: "6.836363",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 3,
              bench: 9
            },
            shots: {
              total: 6,
              on: 2
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 790,
              key: 2,
              accuracy: 29
            },
            tackles: {
              total: 24,
              blocks: 20,
              interceptions: 29
            },
            duels: {
              total: 174,
              won: 108
            },
            dribbles: {
              attempts: 8,
              success: 4,
              past: null
            },
            fouls: {
              drawn: 11,
              committed: 16
            },
            cards: {
              yellow: 3,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18912,
          name: "P. Bardsley",
          firstname: "Phil",
          lastname: "Bardsley",
          age: 38,
          birth: {
            date: "1985-06-28",
            place: "Salford",
            country: "Scotland"
          },
          nationality: "Scotland",
          height: "180 cm",
          weight: "74 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/18912.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-1.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 4,
              lineups: 3,
              minutes: 273,
              number: null,
              position: "Defender",
              rating: "6.550000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 0,
              bench: 24
            },
            shots: {
              total: 3,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 109,
              key: null,
              accuracy: 23
            },
            tackles: {
              total: 6,
              blocks: 1,
              interceptions: 6
            },
            duels: {
              total: 34,
              won: 19
            },
            dribbles: {
              attempts: 4,
              success: 3,
              past: null
            },
            fouls: {
              drawn: 4,
              committed: 8
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18916,
          name: "M. Lowton",
          firstname: "Matthew John",
          lastname: "Lowton",
          age: 34,
          birth: {
            date: "1989-06-09",
            place: "Chesterfield",
            country: "England"
          },
          nationality: "England",
          height: "180 cm",
          weight: "78 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/18916.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-1.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 34,
              lineups: 34,
              minutes: 3060,
              number: null,
              position: "Defender",
              rating: "6.835294",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: 18,
              on: 4
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 1194,
              key: 26,
              accuracy: 24
            },
            tackles: {
              total: 54,
              blocks: 13,
              interceptions: 56
            },
            duels: {
              total: 233,
              won: 127
            },
            dribbles: {
              attempts: 40,
              success: 27,
              past: null
            },
            fouls: {
              drawn: 13,
              committed: 19
            },
            cards: {
              yellow: 5,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18956,
          name: "S. Long",
          firstname: "Shane Patrick",
          lastname: "Long",
          age: 36,
          birth: {
            date: "1987-01-22",
            place: "Gortnahoe",
            country: "Republic of Ireland"
          },
          nationality: "Republic of Ireland",
          height: "178 cm",
          weight: "81 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/18956.png"
        },
        statistics: [
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-3.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 11,
              lineups: 1,
              minutes: 201,
              number: null,
              position: "Attacker",
              rating: "6.410000",
              captain: false
            },
            substitutes: {
              in: 10,
              out: 1,
              bench: 17
            },
            shots: {
              total: 2,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 55,
              key: null,
              accuracy: 4
            },
            tackles: {
              total: 2,
              blocks: null,
              interceptions: 3
            },
            duels: {
              total: 50,
              won: 22
            },
            dribbles: {
              attempts: 5,
              success: 2,
              past: null
            },
            fouls: {
              drawn: 6,
              committed: 7
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18977,
          name: "D. Stephens",
          firstname: "Dale",
          lastname: "Stephens",
          age: 33,
          birth: {
            date: "1989-06-12",
            place: "Bolton",
            country: "England"
          },
          nationality: "England",
          height: "169 cm",
          weight: "71 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/18977.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-2.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 7,
              lineups: 3,
              minutes: 259,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 4,
              out: 2,
              bench: 23
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 51,
              name: "Brighton",
              logo: "https://media-2.api-sports.io/football/teams/51.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19129,
          name: "Pablo Hernández",
          firstname: "Pablo",
          lastname: "Hernández Domínguez",
          age: 38,
          birth: {
            date: "1985-04-11",
            place: "Castellón de la Plana",
            country: "Spain"
          },
          nationality: "Spain",
          height: "173 cm",
          weight: "64 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/19129.png"
        },
        statistics: [
          {
            team: {
              id: 63,
              name: "Leeds",
              logo: "https://media-1.api-sports.io/football/teams/63.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 16,
              lineups: 3,
              minutes: 417,
              number: null,
              position: "Midfielder",
              rating: "6.756250",
              captain: false
            },
            substitutes: {
              in: 13,
              out: 3,
              bench: 23
            },
            shots: {
              total: 9,
              on: 3
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 2,
              saves: null
            },
            passes: {
              total: 378,
              key: 6,
              accuracy: 18
            },
            tackles: {
              total: 5,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 36,
              won: 21
            },
            dribbles: {
              attempts: 11,
              success: 10,
              past: null
            },
            fouls: {
              drawn: 6,
              committed: 1
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19174,
          name: "J. Steer",
          firstname: "Jed John",
          lastname: "Steer",
          age: 31,
          birth: {
            date: "1992-09-23",
            place: "Norwich",
            country: "England"
          },
          nationality: "England",
          height: "183 cm",
          weight: "80 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/19174.png"
        },
        statistics: [
          {
            team: {
              id: 66,
              name: "Aston Villa",
              logo: "https://media-2.api-sports.io/football/teams/66.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 15
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 1
            }
          }
        ]
      },
      {
        player: {
          id: 82227,
          name: "Stephen Francis Henderson",
          firstname: "Stephen Francis",
          lastname: "Henderson",
          age: 34,
          birth: {
            date: "1988-05-02",
            place: "Dublin",
            country: "Republic of Ireland"
          },
          nationality: "Republic of Ireland",
          height: "193 cm",
          weight: "87 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/82227.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-2.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 3
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 127202,
          name: "R. Nartey",
          firstname: "Richard Nicos Tettey",
          lastname: "Nartey",
          age: 25,
          birth: {
            date: "1998-09-06",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "185 cm",
          weight: null,
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/127202.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-2.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 9
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 130420,
          name: "J. Vokins",
          firstname: "Jake",
          lastname: "Vokins",
          age: 23,
          birth: {
            date: "2000-03-17",
            place: "Oxford",
            country: "England"
          },
          nationality: "England",
          height: "180 cm",
          weight: null,
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/130420.png"
        },
        statistics: [
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-1.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 1,
              minutes: 66,
              number: null,
              position: "Defender",
              rating: "6.300000",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 1,
              bench: 7
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 13,
              key: 1,
              accuracy: 11
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 3,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: 2
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 162150,
          name: "N. John",
          firstname: "Nile Omari",
          lastname: "Mckenzie John",
          age: 20,
          birth: {
            date: "2003-03-06",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/162150.png"
        },
        statistics: [
          {
            team: {
              id: 47,
              name: "Tottenham",
              logo: "https://media-2.api-sports.io/football/teams/47.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 204178,
          name: "J. Mumbongo",
          firstname: "Joel",
          lastname: "Mumbongo",
          age: 24,
          birth: {
            date: "1999-01-09",
            place: null,
            country: "Sweden"
          },
          nationality: "Sweden",
          height: "187 cm",
          weight: "88 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/204178.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-3.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 4,
              lineups: 0,
              minutes: 36,
              number: null,
              position: "Attacker",
              rating: "6.433333",
              captain: false
            },
            substitutes: {
              in: 4,
              out: 0,
              bench: 9
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 5,
              key: null,
              accuracy: 1
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 7,
              won: 2
            },
            dribbles: {
              attempts: 1,
              success: null,
              past: null
            },
            fouls: {
              drawn: 2,
              committed: 1
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 237124,
          name: "C. Watts",
          firstname: "Caleb Cassius",
          lastname: "Watts",
          age: 21,
          birth: {
            date: "2002-01-16",
            place: null,
            country: "Australia"
          },
          nationality: "Australia",
          height: "171 cm",
          weight: null,
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/237124.png"
        },
        statistics: [
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-3.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 3,
              lineups: 0,
              minutes: 36,
              number: null,
              position: "Midfielder",
              rating: "6.566666",
              captain: false
            },
            substitutes: {
              in: 3,
              out: 0,
              bench: 9
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 12,
              key: null,
              accuracy: 2
            },
            tackles: {
              total: 2,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 9,
              won: 4
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: 1,
              committed: null
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 278111,
          name: "Shane Aidan Conor Flynn",
          firstname: "Shane Aidan Conor",
          lastname: "Flynn",
          age: 22,
          birth: {
            date: "2001-10-14",
            place: "Dublin",
            country: "Republic of Ireland"
          },
          nationality: "Republic of Ireland",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/278111.png"
        },
        statistics: [
          {
            team: {
              id: 46,
              name: "Leicester",
              logo: "https://media-2.api-sports.io/football/teams/46.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 278116,
          name: "Tawanda Jethro Maswanhise",
          firstname: "Tawanda Jethro",
          lastname: "Maswanhise",
          age: 21,
          birth: {
            date: "2002-11-20",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/278116.png"
        },
        statistics: [
          {
            team: {
              id: 46,
              name: "Leicester",
              logo: "https://media-2.api-sports.io/football/teams/46.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 642,
          name: "S. Agüero",
          firstname: "Sergio Leonel",
          lastname: "Agüero del Castillo",
          age: 33,
          birth: {
            date: "1988-06-02",
            place: "Quilmes",
            country: "Argentina"
          },
          nationality: "Argentina",
          height: "173 cm",
          weight: "70 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/642.png"
        },
        statistics: [
          {
            team: {
              id: 50,
              name: "Manchester City",
              logo: "https://media-1.api-sports.io/football/teams/50.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 12,
              lineups: 7,
              minutes: 559,
              number: null,
              position: "Attacker",
              rating: "6.900000",
              captain: false
            },
            substitutes: {
              in: 5,
              out: 5,
              bench: 12
            },
            shots: {
              total: 17,
              on: 12
            },
            goals: {
              total: 4,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 171,
              key: 7,
              accuracy: 13
            },
            tackles: {
              total: 4,
              blocks: null,
              interceptions: 2
            },
            duels: {
              total: 51,
              won: 21
            },
            dribbles: {
              attempts: 13,
              success: 8,
              past: null
            },
            fouls: {
              drawn: 7,
              committed: 2
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 1,
              missed: 1,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 758,
          name: "G. Bale",
          firstname: "Gareth Frank",
          lastname: "Bale",
          age: 34,
          birth: {
            date: "1989-07-16",
            place: "Cardiff",
            country: "Wales"
          },
          nationality: "Wales",
          height: "186 cm",
          weight: "81 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/758.png"
        },
        statistics: [
          {
            team: {
              id: 47,
              name: "Tottenham",
              logo: "https://media-1.api-sports.io/football/teams/47.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 20,
              lineups: 10,
              minutes: 921,
              number: null,
              position: "Attacker",
              rating: "7.478947",
              captain: false
            },
            substitutes: {
              in: 10,
              out: 10,
              bench: 20
            },
            shots: {
              total: 32,
              on: 19
            },
            goals: {
              total: 11,
              conceded: 0,
              assists: 2,
              saves: null
            },
            passes: {
              total: 366,
              key: 21,
              accuracy: 14
            },
            tackles: {
              total: 17,
              blocks: 2,
              interceptions: 8
            },
            duels: {
              total: 132,
              won: 76
            },
            dribbles: {
              attempts: 49,
              success: 27,
              past: null
            },
            fouls: {
              drawn: 9,
              committed: 9
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 882,
          name: "David de Gea",
          firstname: "David",
          lastname: "de Gea Quintana",
          age: 33,
          birth: {
            date: "1990-11-07",
            place: "Madrid",
            country: "Spain"
          },
          nationality: "Spain",
          height: "192 cm",
          weight: "76 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/882.png"
        },
        statistics: [
          {
            team: {
              id: 33,
              name: "Manchester United",
              logo: "https://media-1.api-sports.io/football/teams/33.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 26,
              lineups: 26,
              minutes: 2296,
              number: null,
              position: "Goalkeeper",
              rating: "6.773076",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 1,
              bench: 7
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 32,
              assists: null,
              saves: 59
            },
            passes: {
              total: 501,
              key: null,
              accuracy: 14
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 9,
              won: 8
            },
            dribbles: {
              attempts: 1,
              success: 1,
              past: null
            },
            fouls: {
              drawn: 3,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 1
            }
          }
        ]
      },
      {
        player: {
          id: 1432,
          name: "Y. Bolasie",
          firstname: "Yannick",
          lastname: "Bolasie Yala",
          age: 34,
          birth: {
            date: "1989-05-24",
            place: "Lyon",
            country: "France"
          },
          nationality: "Congo DR",
          height: "188 cm",
          weight: "84 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/1432.png"
        },
        statistics: [
          {
            team: {
              id: 45,
              name: "Everton",
              logo: "https://media-2.api-sports.io/football/teams/45.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Attacker",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 1448,
          name: "S. Mustafi",
          firstname: "Shkodran",
          lastname: "Mustafi",
          age: 31,
          birth: {
            date: "1992-04-17",
            place: "Bad Hersfeld",
            country: "Germany"
          },
          nationality: "Germany",
          height: "184 cm",
          weight: "82 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/1448.png"
        },
        statistics: [
          {
            team: {
              id: 42,
              name: "Arsenal",
              logo: "https://media-2.api-sports.io/football/teams/42.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 3,
              lineups: 0,
              minutes: 44,
              number: null,
              position: "Defender",
              rating: "6.700000",
              captain: false
            },
            substitutes: {
              in: 3,
              out: 0,
              bench: 9
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 49,
              key: null,
              accuracy: 43
            },
            tackles: {
              total: 1,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 5,
              won: 4
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: 1
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 1450,
          name: "S. Papastathopoulos",
          firstname: "Sokratis",
          lastname: "Papastathopoulos",
          age: 35,
          birth: {
            date: "1988-06-09",
            place: "Kalamata",
            country: "Greece"
          },
          nationality: "Greece",
          height: "186 cm",
          weight: "85 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/1450.png"
        },
        statistics: [
          {
            team: {
              id: 42,
              name: "Arsenal",
              logo: "https://media-1.api-sports.io/football/teams/42.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 1458,
          name: "M. Özil",
          firstname: "Mesut",
          lastname: "Özil",
          age: 35,
          birth: {
            date: "1988-10-15",
            place: "Gelsenkirchen",
            country: "Germany"
          },
          nationality: "Germany",
          height: "180 cm",
          weight: "76 kg",
          injured: false,
          photo: "https://media-3.api-sports.io/football/players/1458.png"
        },
        statistics: [
          {
            team: {
              id: 42,
              name: "Arsenal",
              logo: "https://media-3.api-sports.io/football/teams/42.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 2275,
          name: "W. Caballero",
          firstname: "Wilfredo Daniel",
          lastname: "Caballero Lazcano",
          age: 42,
          birth: {
            date: "1981-09-28",
            place: "Entre Ríos",
            country: "Argentina"
          },
          nationality: "Argentina",
          height: "186 cm",
          weight: "81 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/2275.png"
        },
        statistics: [
          {
            team: {
              id: 49,
              name: "Chelsea",
              logo: "https://media-1.api-sports.io/football/teams/49.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 1,
              minutes: 90,
              number: null,
              position: "Goalkeeper",
              rating: "5.700000",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 6
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 3,
              assists: null,
              saves: null
            },
            passes: {
              total: 24,
              key: null,
              accuracy: 22
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 18773,
          name: "C. Fuchs",
          firstname: "Christian",
          lastname: "Fuchs",
          age: 37,
          birth: {
            date: "1986-04-07",
            place: "Neunkirchen",
            country: "Austria"
          },
          nationality: "Austria",
          height: "187 cm",
          weight: "89 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/18773.png"
        },
        statistics: [
          {
            team: {
              id: 46,
              name: "Leicester",
              logo: "https://media-1.api-sports.io/football/teams/46.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 9,
              lineups: 8,
              minutes: 702,
              number: null,
              position: "Defender",
              rating: "6.844444",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 1,
              bench: 21
            },
            shots: {
              total: 2,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 522,
              key: 1,
              accuracy: 47
            },
            tackles: {
              total: 18,
              blocks: 4,
              interceptions: 15
            },
            duels: {
              total: 79,
              won: 42
            },
            dribbles: {
              attempts: 2,
              success: null,
              past: null
            },
            fouls: {
              drawn: 5,
              committed: 14
            },
            cards: {
              yellow: 4,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18857,
          name: "C. Wickham",
          firstname: "Connor Neil Ralph",
          lastname: "Wickham",
          age: 30,
          birth: {
            date: "1993-03-31",
            place: "Hereford",
            country: "England"
          },
          nationality: "England",
          height: "191 cm",
          weight: "90 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/18857.png"
        },
        statistics: [
          {
            team: {
              id: 52,
              name: "Crystal Palace",
              logo: "https://media-1.api-sports.io/football/teams/52.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-1.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Attacker",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 3
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18980,
          name: "J. Izquierdo",
          firstname: "José Heriberto",
          lastname: "Izquierdo Mena",
          age: 30,
          birth: {
            date: "1992-07-07",
            place: "Pereira",
            country: "Colombia"
          },
          nationality: "Colombia",
          height: "171 cm",
          weight: "73 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/18980.png"
        },
        statistics: [
          {
            team: {
              id: 51,
              name: "Brighton",
              logo: "https://media-1.api-sports.io/football/teams/51.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 0,
              minutes: 8,
              number: null,
              position: "Attacker",
              rating: "6.700000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 0,
              bench: 10
            },
            shots: {
              total: 1,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 7,
              key: null,
              accuracy: 6
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 1,
              won: null
            },
            dribbles: {
              attempts: 1,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19098,
          name: "K. Bryan",
          firstname: "Kean Shay",
          lastname: "Bryan",
          age: 27,
          birth: {
            date: "1996-11-01",
            place: "Manchester",
            country: "England"
          },
          nationality: "England",
          height: "185 cm",
          weight: "72 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/19098.png"
        },
        statistics: [
          {
            team: {
              id: 62,
              name: "Sheffield Utd",
              logo: "https://media-1.api-sports.io/football/teams/62.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 13,
              lineups: 12,
              minutes: 1007,
              number: null,
              position: "Defender",
              rating: "6.769230",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 4,
              bench: 11
            },
            shots: {
              total: 3,
              on: 1
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 447,
              key: 4,
              accuracy: 24
            },
            tackles: {
              total: 20,
              blocks: 10,
              interceptions: 13
            },
            duels: {
              total: 101,
              won: 56
            },
            dribbles: {
              attempts: 5,
              success: 3,
              past: null
            },
            fouls: {
              drawn: 2,
              committed: 13
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19112,
          name: "Kiko Casilla",
          firstname: "Francisco",
          lastname: "Casilla Cortés",
          age: 37,
          birth: {
            date: "1986-10-02",
            place: "Alcover",
            country: "Spain"
          },
          nationality: "Spain",
          height: "190 cm",
          weight: "86 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/19112.png"
        },
        statistics: [
          {
            team: {
              id: 63,
              name: "Leeds",
              logo: "https://media-1.api-sports.io/football/teams/63.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 3,
              lineups: 3,
              minutes: 270,
              number: null,
              position: "Goalkeeper",
              rating: "7.300000",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 31
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 2,
              assists: null,
              saves: 8
            },
            passes: {
              total: 78,
              key: null,
              accuracy: 22
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 2,
              won: 2
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 19168,
          name: "Thomas Henry Alex Robson-Kanu",
          firstname: "Thomas Henry Alex",
          lastname: "Robson-Kanu",
          age: 34,
          birth: {
            date: "1989-05-21",
            place: "London",
            country: "England"
          },
          nationality: "Wales",
          height: "183 cm",
          weight: "83 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/19168.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-1.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-3.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 19,
              lineups: 2,
              minutes: 546,
              number: null,
              position: "Attacker",
              rating: "6.457894",
              captain: false
            },
            substitutes: {
              in: 17,
              out: 2,
              bench: 25
            },
            shots: {
              total: 9,
              on: 6
            },
            goals: {
              total: 2,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 79,
              key: 5,
              accuracy: 3
            },
            tackles: {
              total: 2,
              blocks: null,
              interceptions: 2
            },
            duels: {
              total: 94,
              won: 29
            },
            dribbles: {
              attempts: 14,
              success: 6,
              past: null
            },
            fouls: {
              drawn: 10,
              committed: 15
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19181,
          name: "N. Taylor",
          firstname: "Neil John",
          lastname: "Taylor",
          age: 33,
          birth: {
            date: "1989-02-07",
            place: "St. Asaph",
            country: "Wales"
          },
          nationality: "Wales",
          height: "176 cm",
          weight: "64 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/19181.png"
        },
        statistics: [
          {
            team: {
              id: 66,
              name: "Aston Villa",
              logo: "https://media-2.api-sports.io/football/teams/66.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 0,
              minutes: 15,
              number: null,
              position: "Defender",
              rating: "6.200000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 0,
              bench: 27
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 9,
              key: null,
              accuracy: 9
            },
            tackles: {
              total: 1,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 2,
              won: 1
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: 1
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19393,
          name: "J. Onomah",
          firstname: "Joshua Oghenetega Peter",
          lastname: "Onomah",
          age: 26,
          birth: {
            date: "1997-04-27",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "185 cm",
          weight: "70 kg",
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/19393.png"
        },
        statistics: [
          {
            team: {
              id: 36,
              name: "Fulham",
              logo: "https://media-3.api-sports.io/football/teams/36.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 11,
              lineups: 4,
              minutes: 370,
              number: null,
              position: "Midfielder",
              rating: "6.488888",
              captain: false
            },
            substitutes: {
              in: 7,
              out: 3,
              bench: 20
            },
            shots: {
              total: 4,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 170,
              key: 1,
              accuracy: 17
            },
            tackles: {
              total: 11,
              blocks: 2,
              interceptions: 2
            },
            duels: {
              total: 50,
              won: 17
            },
            dribbles: {
              attempts: 2,
              success: 2,
              past: null
            },
            fouls: {
              drawn: null,
              committed: 12
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 90497,
          name: "W. Reid",
          firstname: "Winston Wiremu",
          lastname: "Reid",
          age: 34,
          birth: {
            date: "1988-07-03",
            place: "Auckland",
            country: "New Zealand"
          },
          nationality: "New Zealand",
          height: "190 cm",
          weight: "87 kg",
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/90497.png"
        },
        statistics: [
          {
            team: {
              id: 48,
              name: "West Ham",
              logo: "https://media-3.api-sports.io/football/teams/48.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 130418,
          name: "A. Søndergaard",
          firstname: "Andreas",
          lastname: "Søndergaard",
          age: 22,
          birth: {
            date: "2001-01-17",
            place: null,
            country: "Denmark"
          },
          nationality: "Denmark",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-2.api-sports.io/football/players/130418.png"
        },
        statistics: [
          {
            team: {
              id: 39,
              name: "Wolves",
              logo: "https://media-3.api-sports.io/football/teams/39.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 3
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 138411,
          name: "Liam John Hughes",
          firstname: "Liam John",
          lastname: "Hughes",
          age: 22,
          birth: {
            date: "2001-08-19",
            place: null,
            country: "Northern Ireland"
          },
          nationality: "Northern Ireland",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/138411.png"
        },
        statistics: [
          {
            team: {
              id: 40,
              name: "Liverpool",
              logo: "https://media-2.api-sports.io/football/teams/40.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-2.api-sports.io/football/leagues/39.png",
              flag: "https://media-1.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 277716,
          name: "A. Hackford",
          firstname: "Antwoine",
          lastname: "Hackford",
          age: 19,
          birth: {
            date: "2004-03-20",
            place: "Sheffield",
            country: "England"
          },
          nationality: "England",
          height: "177 cm",
          weight: null,
          injured: false,
          photo: "https://media-1.api-sports.io/football/players/277716.png"
        },
        statistics: [
          {
            team: {
              id: 62,
              name: "Sheffield Utd",
              logo: "https://media-2.api-sports.io/football/teams/62.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-3.api-sports.io/football/leagues/39.png",
              flag: "https://media-2.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 0,
              minutes: 10,
              number: null,
              position: "Attacker",
              rating: "6.700000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 1,
              key: null,
              accuracy: 1
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 1,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 114,
          name: "Adrien Silva",
          firstname: "Adrien Sébastien",
          lastname: "Perruchet da Silva",
          age: 34,
          birth: {
            date: "1989-03-15",
            place: "Angoulême",
            country: "France"
          },
          nationality: "Portugal",
          height: "171 cm",
          weight: "72 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/114.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 167,
          name: "D. Rose",
          firstname: "Daniel Lee",
          lastname: "Rose",
          age: 32,
          birth: {
            date: "1990-07-02",
            place: "Doncaster",
            country: "England"
          },
          nationality: "England",
          height: "173 cm",
          weight: "72 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/167.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 326,
          name: "Allan",
          firstname: "Allan",
          lastname: "Marques Loureiro",
          age: 32,
          birth: {
            date: "1991-01-08",
            place: "Rio de Janeiro",
            country: "Brazil"
          },
          nationality: "Brazil",
          height: "174 cm",
          weight: "77 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/326.png"
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
              season: 2020
            },
            games: {
              appearences: 24,
              lineups: 23,
              minutes: 2052,
              number: null,
              position: "Midfielder",
              rating: "6.829166",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 2,
              bench: 3
            },
            shots: {
              total: 6,
              on: 2
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 1055,
              key: 18,
              accuracy: 37
            },
            tackles: {
              total: 80,
              blocks: 12,
              interceptions: 19
            },
            duels: {
              total: 296,
              won: 145
            },
            dribbles: {
              attempts: 49,
              success: 31,
              past: null
            },
            fouls: {
              drawn: 30,
              committed: 37
            },
            cards: {
              yellow: 6,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
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
              season: 2020
            },
            games: {
              appearences: 8,
              lineups: 2,
              minutes: 261,
              number: null,
              position: "Midfielder",
              rating: "6.625000",
              captain: false
            },
            substitutes: {
              in: 6,
              out: 1,
              bench: 13
            },
            shots: {
              total: 1,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 217,
              key: 2,
              accuracy: 27
            },
            tackles: {
              total: 5,
              blocks: null,
              interceptions: 4
            },
            duels: {
              total: 27,
              won: 19
            },
            dribbles: {
              attempts: 10,
              success: 7,
              past: null
            },
            fouls: {
              drawn: 7,
              committed: 3
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 888,
          name: "P. Jones",
          firstname: "Phil Anthony",
          lastname: "Jones",
          age: 31,
          birth: {
            date: "1992-02-21",
            place: "Preston",
            country: "England"
          },
          nationality: "England",
          height: "180 cm",
          weight: "71 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/888.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 900,
          name: "J. Lingard",
          firstname: "Jesse Ellis",
          lastname: "Lingard",
          age: 31,
          birth: {
            date: "1992-12-15",
            place: "Warrington",
            country: "England"
          },
          nationality: "England",
          height: "175 cm",
          weight: "62 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/900.png"
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
              season: 2020
            },
            games: {
              appearences: 16,
              lineups: 16,
              minutes: 1426,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 5,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 9,
              conceded: 0,
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
              yellow: 3,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 4
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 2281,
          name: "G. Cahill",
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
              season: 2020
            },
            games: {
              appearences: 20,
              lineups: 20,
              minutes: 1800,
              number: null,
              position: "Defender",
              rating: "6.765000",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 7
            },
            shots: {
              total: 8,
              on: 3
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 746,
              key: 8,
              accuracy: 30
            },
            tackles: {
              total: 13,
              blocks: 22,
              interceptions: 13
            },
            duels: {
              total: 139,
              won: 86
            },
            dribbles: {
              attempts: 1,
              success: 1,
              past: null
            },
            fouls: {
              drawn: 3,
              committed: 12
            },
            cards: {
              yellow: 3,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18759,
          name: "P. Jagielka",
          firstname: "Philip Nikodem",
          lastname: "Jagielka",
          age: 41,
          birth: {
            date: "1982-08-17",
            place: "Manchester",
            country: "England"
          },
          nationality: "England",
          height: "180 cm",
          weight: "87 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18759.png"
        },
        statistics: [
          {
            team: {
              id: 62,
              name: "Sheffield Utd",
              logo: "https://media-4.api-sports.io/football/teams/62.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 10,
              lineups: 6,
              minutes: 526,
              number: null,
              position: "Defender",
              rating: "6.266666",
              captain: false
            },
            substitutes: {
              in: 4,
              out: 3,
              bench: 25
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 204,
              key: null,
              accuracy: 16
            },
            tackles: {
              total: 5,
              blocks: 5,
              interceptions: 10
            },
            duels: {
              total: 43,
              won: 19
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: 1,
              committed: 8
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 1
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18769,
          name: "T. Walcott",
          firstname: "Theo James",
          lastname: "Walcott",
          age: 34,
          birth: {
            date: "1989-03-16",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "176 cm",
          weight: "68 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18769.png"
        },
        statistics: [
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-4.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 21,
              lineups: 20,
              minutes: 1629,
              number: null,
              position: "Attacker",
              rating: "6.300000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 12,
              bench: 4
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 3,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 1,
              key: null,
              accuracy: 1
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
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
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 0,
              minutes: 12,
              number: null,
              position: "Attacker",
              rating: "6.300000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 1,
              key: null,
              accuracy: 1
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18829,
          name: "Jack Wilshere",
          firstname: "Jack",
          lastname: "Wilshere",
          age: 30,
          birth: {
            date: "1992-01-01",
            place: "Stevenage",
            country: "England"
          },
          nationality: "England",
          height: "172 cm",
          weight: "68 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18829.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 18852,
          name: "L. Milivojević",
          firstname: "Luka",
          lastname: "Milivojević",
          age: 32,
          birth: {
            date: "1991-04-07",
            place: "Kragujevac",
            country: "Yugoslavia"
          },
          nationality: "Serbia",
          height: "186 cm",
          weight: "80 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18852.png"
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
              season: 2020
            },
            games: {
              appearences: 31,
              lineups: 27,
              minutes: 2365,
              number: null,
              position: "Midfielder",
              rating: "6.832258",
              captain: false
            },
            substitutes: {
              in: 4,
              out: 8,
              bench: 5
            },
            shots: {
              total: 13,
              on: 7
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 1294,
              key: 21,
              accuracy: 34
            },
            tackles: {
              total: 65,
              blocks: 6,
              interceptions: 35
            },
            duels: {
              total: 255,
              won: 139
            },
            dribbles: {
              attempts: 14,
              success: 8,
              past: null
            },
            fouls: {
              drawn: 33,
              committed: 38
            },
            cards: {
              yellow: 8,
              yellowred: 0,
              red: 1
            },
            penalty: {
              won: null,
              commited: null,
              scored: 1,
              missed: 1,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18854,
          name: "A. Townsend",
          firstname: "Andros Darryl",
          lastname: "Townsend",
          age: 32,
          birth: {
            date: "1991-07-16",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "181 cm",
          weight: "77 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18854.png"
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
              season: 2020
            },
            games: {
              appearences: 34,
              lineups: 25,
              minutes: 2258,
              number: null,
              position: "Midfielder",
              rating: "6.984848",
              captain: false
            },
            substitutes: {
              in: 9,
              out: 9,
              bench: 13
            },
            shots: {
              total: 24,
              on: 11
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: 5,
              saves: null
            },
            passes: {
              total: 703,
              key: 41,
              accuracy: 15
            },
            tackles: {
              total: 78,
              blocks: 2,
              interceptions: 42
            },
            duels: {
              total: 355,
              won: 178
            },
            dribbles: {
              attempts: 73,
              success: 44,
              past: null
            },
            fouls: {
              drawn: 54,
              committed: 28
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18882,
          name: "L. Mousset",
          firstname: "Lys",
          lastname: "Mousset",
          age: 27,
          birth: {
            date: "1996-02-08",
            place: "Le Havre",
            country: "France"
          },
          nationality: "France",
          height: "184 cm",
          weight: "80 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18882.png"
        },
        statistics: [
          {
            team: {
              id: 62,
              name: "Sheffield Utd",
              logo: "https://media-4.api-sports.io/football/teams/62.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 11,
              lineups: 2,
              minutes: 289,
              number: null,
              position: "Attacker",
              rating: "6.400000",
              captain: false
            },
            substitutes: {
              in: 9,
              out: 2,
              bench: 17
            },
            shots: {
              total: 4,
              on: 2
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 44,
              key: 3,
              accuracy: 3
            },
            tackles: {
              total: 1,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 48,
              won: 11
            },
            dribbles: {
              attempts: 13,
              success: 4,
              past: null
            },
            fouls: {
              drawn: 2,
              committed: 7
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18936,
          name: "R. Bertrand",
          firstname: "Ryan Dominic",
          lastname: "Bertrand",
          age: 34,
          birth: {
            date: "1989-08-05",
            place: "Southwark",
            country: "England"
          },
          nationality: "England",
          height: "179 cm",
          weight: "85 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18936.png"
        },
        statistics: [
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-4.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 29,
              lineups: 29,
              minutes: 2599,
              number: null,
              position: "Defender",
              rating: "6.641379",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 1,
              bench: 0
            },
            shots: {
              total: 8,
              on: 3
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 1197,
              key: 14,
              accuracy: 32
            },
            tackles: {
              total: 60,
              blocks: 1,
              interceptions: 30
            },
            duels: {
              total: 245,
              won: 135
            },
            dribbles: {
              attempts: 9,
              success: 3,
              past: null
            },
            fouls: {
              drawn: 35,
              committed: 29
            },
            cards: {
              yellow: 5,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19148,
          name: "K. Gibbs",
          firstname: "Kieran James Ricardo",
          lastname: "Gibbs",
          age: 34,
          birth: {
            date: "1989-09-26",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "181 cm",
          weight: "73 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19148.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 10,
              lineups: 9,
              minutes: 809,
              number: null,
              position: "Defender",
              rating: "6.460000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 0,
              bench: 8
            },
            shots: {
              total: 1,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 264,
              key: 4,
              accuracy: 19
            },
            tackles: {
              total: 15,
              blocks: 6,
              interceptions: 16
            },
            duels: {
              total: 53,
              won: 28
            },
            dribbles: {
              attempts: 2,
              success: 2,
              past: null
            },
            fouls: {
              drawn: 2,
              committed: 6
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 1
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19153,
          name: "G. Barry",
          firstname: "Gareth",
          lastname: "Barry",
          age: 39,
          birth: {
            date: "1981-02-23",
            place: "Hastings",
            country: "England"
          },
          nationality: "England",
          height: "183 cm",
          weight: "78 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19153.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
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
          id: 19159,
          name: "S. Johansen",
          firstname: "Stefan Marius",
          lastname: "Johansen",
          age: 32,
          birth: {
            date: "1991-01-08",
            place: "Vardø",
            country: "Norway"
          },
          nationality: "Norway",
          height: "182 cm",
          weight: "78 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19159.png"
        },
        statistics: [
          {
            team: {
              id: 36,
              name: "Fulham",
              logo: "https://media-4.api-sports.io/football/teams/36.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19186,
          name: "Ahmed El Mohamady",
          firstname: "Ahmed Eissa",
          lastname: "El Mohamady Abdel Fattah",
          age: 34,
          birth: {
            date: "1987-09-09",
            place: "Basyoun",
            country: "Egypt"
          },
          nationality: "Egypt",
          height: "183 cm",
          weight: "75 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19186.png"
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
              season: 2020
            },
            games: {
              appearences: 14,
              lineups: 8,
              minutes: 833,
              number: null,
              position: "Defender",
              rating: "6.900000",
              captain: false
            },
            substitutes: {
              in: 6,
              out: 0,
              bench: 30
            },
            shots: {
              total: 8,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 470,
              key: 13,
              accuracy: 26
            },
            tackles: {
              total: 17,
              blocks: 3,
              interceptions: 17
            },
            duels: {
              total: 64,
              won: 40
            },
            dribbles: {
              attempts: 3,
              success: 2,
              past: null
            },
            fouls: {
              drawn: 3,
              committed: 6
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19190,
          name: "H. Lansbury",
          firstname: "Henri",
          lastname: "Lansbury",
          age: 33,
          birth: {
            date: "1990-10-12",
            place: "Enfield",
            country: "England"
          },
          nationality: "England",
          height: "183 cm",
          weight: "78 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19190.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 277714,
          name: "Kyron Silveria Gordon",
          firstname: "Kyron Silveria",
          lastname: "Gordon",
          age: 21,
          birth: {
            date: "2002-05-24",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/277714.png"
        },
        statistics: [
          {
            team: {
              id: 62,
              name: "Sheffield Utd",
              logo: "https://media-4.api-sports.io/football/teams/62.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 6
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 307,
          name: "X. Shaqiri",
          firstname: "Xherdan",
          lastname: "Shaqiri",
          age: 32,
          birth: {
            date: "1991-10-10",
            place: "Gjilan",
            country: "Kosovo"
          },
          nationality: "Switzerland",
          height: "169 cm",
          weight: "72 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/307.png"
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
              season: 2020
            },
            games: {
              appearences: 14,
              lineups: 5,
              minutes: 552,
              number: null,
              position: "Midfielder",
              rating: "6.975000",
              captain: false
            },
            substitutes: {
              in: 9,
              out: 4,
              bench: 22
            },
            shots: {
              total: 6,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 2,
              saves: null
            },
            passes: {
              total: 399,
              key: 19,
              accuracy: 26
            },
            tackles: {
              total: 7,
              blocks: null,
              interceptions: 2
            },
            duels: {
              total: 54,
              won: 21
            },
            dribbles: {
              attempts: 9,
              success: 6,
              past: null
            },
            fouls: {
              drawn: 6,
              committed: 11
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 458,
          name: "M. Diagne",
          firstname: "Mbaye",
          lastname: "Diagne",
          age: 32,
          birth: {
            date: "1991-10-28",
            place: "Dakar",
            country: "Senegal"
          },
          nationality: "Senegal",
          height: "191 cm",
          weight: "86 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/458.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 16,
              lineups: 14,
              minutes: 1193,
              number: null,
              position: "Attacker",
              rating: "6.720000",
              captain: false
            },
            substitutes: {
              in: 2,
              out: 6,
              bench: 4
            },
            shots: {
              total: 24,
              on: 10
            },
            goals: {
              total: 3,
              conceded: 0,
              assists: 2,
              saves: null
            },
            passes: {
              total: 235,
              key: 9,
              accuracy: 9
            },
            tackles: {
              total: 4,
              blocks: 1,
              interceptions: 1
            },
            duels: {
              total: 223,
              won: 89
            },
            dribbles: {
              attempts: 16,
              success: 10,
              past: null
            },
            fouls: {
              drawn: 23,
              committed: 17
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 574,
          name: "F. Krovinović",
          firstname: "Filip",
          lastname: "Krovinović",
          age: 28,
          birth: {
            date: "1995-08-29",
            place: "Zagreb",
            country: "Croatia"
          },
          nationality: "Croatia",
          height: "175 cm",
          weight: "69 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/574.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 11,
              lineups: 5,
              minutes: 543,
              number: null,
              position: "Midfielder",
              rating: "6.690909",
              captain: false
            },
            substitutes: {
              in: 6,
              out: 2,
              bench: 11
            },
            shots: {
              total: 5,
              on: 2
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 360,
              key: 5,
              accuracy: 27
            },
            tackles: {
              total: 13,
              blocks: null,
              interceptions: 4
            },
            duels: {
              total: 72,
              won: 40
            },
            dribbles: {
              attempts: 9,
              success: 8,
              past: null
            },
            fouls: {
              drawn: 12,
              committed: 5
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 2727,
          name: "J. Lössl",
          firstname: "Jonas",
          lastname: "Bybjerg Lössl",
          age: 34,
          birth: {
            date: "1989-02-01",
            place: "Kolding",
            country: "Denmark"
          },
          nationality: "Denmark",
          height: "195 cm",
          weight: "89 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/2727.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 8
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 2758,
          name: "L. Kalinić",
          firstname: "Lovre",
          lastname: "Kalinić",
          age: 33,
          birth: {
            date: "1990-04-03",
            place: "Split",
            country: "Croatia"
          },
          nationality: "Croatia",
          height: "201 cm",
          weight: "96 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/2758.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 2795,
          name: "G. Sigurðsson",
          firstname: "Gylfi Þór",
          lastname: "Sigurðsson",
          age: 34,
          birth: {
            date: "1989-09-08",
            place: "Reykjavík",
            country: "Iceland"
          },
          nationality: "Iceland",
          height: "186 cm",
          weight: "79 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/2795.png"
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
              season: 2020
            },
            games: {
              appearences: 36,
              lineups: 24,
              minutes: 2255,
              number: null,
              position: "Midfielder",
              rating: "6.908333",
              captain: false
            },
            substitutes: {
              in: 12,
              out: 12,
              bench: 14
            },
            shots: {
              total: 33,
              on: 17
            },
            goals: {
              total: 6,
              conceded: 0,
              assists: 5,
              saves: null
            },
            passes: {
              total: 853,
              key: 44,
              accuracy: 20
            },
            tackles: {
              total: 30,
              blocks: 2,
              interceptions: 34
            },
            duels: {
              total: 169,
              won: 67
            },
            dribbles: {
              attempts: 26,
              success: 14,
              past: null
            },
            fouls: {
              drawn: 18,
              committed: 22
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 3,
              missed: 1,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 3240,
          name: "J. Gbamin",
          firstname: "Jean-Philippe",
          lastname: "Gbamin",
          age: 28,
          birth: {
            date: "1995-09-25",
            place: "San-Pédro",
            country: "Côte d'Ivoire"
          },
          nationality: "Côte d'Ivoire",
          height: "186 cm",
          weight: "83 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/3240.png"
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
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 0,
              minutes: 11,
              number: null,
              position: "Midfielder",
              rating: "6.300000",
              captain: false
            },
            substitutes: {
              in: 1,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 9,
              key: null,
              accuracy: 6
            },
            tackles: {
              total: 1,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 3,
              won: 1
            },
            dribbles: {
              attempts: 1,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 15928,
          name: "F. Alves",
          firstname: "Frederik",
          lastname: "Alves Ibsen",
          age: 24,
          birth: {
            date: "1999-11-08",
            place: "Hvidovre",
            country: "Denmark"
          },
          nationality: "Denmark",
          height: "195 cm",
          weight: "84 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/15928.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 11
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18834,
          name: "A. Yarmolenko",
          firstname: "Andrii",
          lastname: "Yarmolenko",
          age: 34,
          birth: {
            date: "1989-10-23",
            place: "Sankt-Peterburg",
            country: "Russia"
          },
          nationality: "Ukraine",
          height: "189 cm",
          weight: "81 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18834.png"
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
              season: 2020
            },
            games: {
              appearences: 15,
              lineups: 1,
              minutes: 362,
              number: null,
              position: "Midfielder",
              rating: "6.586666",
              captain: false
            },
            substitutes: {
              in: 14,
              out: 1,
              bench: 24
            },
            shots: {
              total: 4,
              on: 2
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 135,
              key: 5,
              accuracy: 8
            },
            tackles: {
              total: 5,
              blocks: null,
              interceptions: 1
            },
            duels: {
              total: 53,
              won: 21
            },
            dribbles: {
              attempts: 12,
              success: 6,
              past: null
            },
            fouls: {
              drawn: 6,
              committed: 8
            },
            cards: {
              yellow: 3,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18930,
          name: "M. Vydra",
          firstname: "Matěj",
          lastname: "Vydra",
          age: 31,
          birth: {
            date: "1992-05-01",
            place: "Chotebor",
            country: "Czechia"
          },
          nationality: "Czechia",
          height: "180 cm",
          weight: "71 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18930.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-4.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 28,
              lineups: 15,
              minutes: 1366,
              number: null,
              position: "Attacker",
              rating: "6.565384",
              captain: false
            },
            substitutes: {
              in: 13,
              out: 10,
              bench: 18
            },
            shots: {
              total: 27,
              on: 10
            },
            goals: {
              total: 3,
              conceded: 0,
              assists: 2,
              saves: null
            },
            passes: {
              total: 236,
              key: 14,
              accuracy: 6
            },
            tackles: {
              total: 9,
              blocks: 1,
              interceptions: 6
            },
            duels: {
              total: 207,
              won: 73
            },
            dribbles: {
              attempts: 26,
              success: 16,
              past: null
            },
            fouls: {
              drawn: 13,
              committed: 6
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19011,
          name: "Fabri",
          firstname: "Fabricio Martín",
          lastname: "Agosto Ramírez",
          age: 36,
          birth: {
            date: "1987-12-31",
            place: "Vecindario",
            country: "Spain"
          },
          nationality: "Spain",
          height: "184 cm",
          weight: "79 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19011.png"
        },
        statistics: [
          {
            team: {
              id: 36,
              name: "Fulham",
              logo: "https://media-4.api-sports.io/football/teams/36.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 8
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 19027,
          name: "N. Kebano",
          firstname: "Neeskens",
          lastname: "Kebano",
          age: 31,
          birth: {
            date: "1992-03-10",
            place: "Montereau",
            country: "France"
          },
          nationality: "Congo DR",
          height: "170 cm",
          weight: "65 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19027.png"
        },
        statistics: [
          {
            team: {
              id: 36,
              name: "Fulham",
              logo: "https://media-4.api-sports.io/football/teams/36.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 5,
              lineups: 1,
              minutes: 116,
              number: null,
              position: "Midfielder",
              rating: "6.375000",
              captain: false
            },
            substitutes: {
              in: 4,
              out: 1,
              bench: 12
            },
            shots: {
              total: 3,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 36,
              key: 1,
              accuracy: 8
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 15,
              won: 4
            },
            dribbles: {
              attempts: 5,
              success: 3,
              past: null
            },
            fouls: {
              drawn: 1,
              committed: 3
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19115,
          name: "B. Peacock-Farrell",
          firstname: "Bailey",
          lastname: "Peacock-Farrell",
          age: 27,
          birth: {
            date: "1996-10-29",
            place: "Darlington",
            country: "England"
          },
          nationality: "Northern Ireland",
          height: "193 cm",
          weight: "73 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19115.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-4.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 4,
              lineups: 4,
              minutes: 360,
              number: null,
              position: "Goalkeeper",
              rating: "5.900000",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 31
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 14,
              assists: null,
              saves: 10
            },
            passes: {
              total: 106,
              key: null,
              accuracy: 13
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 1,
              won: 1
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: 1,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 19195,
          name: "A. El Ghazi",
          firstname: "Anwar",
          lastname: "El Ghazi",
          age: 28,
          birth: {
            date: "1995-05-03",
            place: "Barendrecht",
            country: "Netherlands"
          },
          nationality: "Netherlands",
          height: "189 cm",
          weight: "90 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19195.png"
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
              season: 2020
            },
            games: {
              appearences: 28,
              lineups: 17,
              minutes: 1614,
              number: null,
              position: "Attacker",
              rating: "6.866666",
              captain: false
            },
            substitutes: {
              in: 11,
              out: 11,
              bench: 17
            },
            shots: {
              total: 49,
              on: 30
            },
            goals: {
              total: 10,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 523,
              key: 26,
              accuracy: 14
            },
            tackles: {
              total: 16,
              blocks: null,
              interceptions: 6
            },
            duels: {
              total: 239,
              won: 98
            },
            dribbles: {
              attempts: 49,
              success: 26,
              past: null
            },
            fouls: {
              drawn: 28,
              committed: 18
            },
            cards: {
              yellow: 2,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 4,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 49923,
          name: "A. Kamara",
          firstname: "Aboubakar",
          lastname: "Kamara",
          age: 28,
          birth: {
            date: "1995-03-07",
            place: "Gonesse",
            country: "France"
          },
          nationality: "Mauritania",
          height: "177 cm",
          weight: "76 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/49923.png"
        },
        statistics: [
          {
            team: {
              id: 36,
              name: "Fulham",
              logo: "https://media-4.api-sports.io/football/teams/36.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 11,
              lineups: 2,
              minutes: 310,
              number: null,
              position: "Attacker",
              rating: "6.363636",
              captain: false
            },
            substitutes: {
              in: 9,
              out: 2,
              bench: 15
            },
            shots: {
              total: 3,
              on: 2
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 112,
              key: 6,
              accuracy: 7
            },
            tackles: {
              total: 2,
              blocks: null,
              interceptions: 1
            },
            duels: {
              total: 54,
              won: 20
            },
            dribbles: {
              attempts: 9,
              success: 4,
              past: null
            },
            fouls: {
              drawn: 3,
              committed: 9
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 1
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 90494,
          name: "N. Trott",
          firstname: "Nathan Wallace",
          lastname: "Newman Trott",
          age: 25,
          birth: {
            date: "1998-11-21",
            place: null,
            country: "Bermuda"
          },
          nationality: "England",
          height: "188 cm",
          weight: "75 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/90494.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 10
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 106721,
          name: "K. Žiger",
          firstname: "Karlo",
          lastname: "Žiger",
          age: 22,
          birth: {
            date: "2001-05-11",
            place: "Zagreb",
            country: "Croatia"
          },
          nationality: "Croatia",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/106721.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 171059,
          name: "J. Baptiste",
          firstname: "Jamal Marcus",
          lastname: "Baptiste",
          age: 20,
          birth: {
            date: "2003-11-11",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/171059.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 276086,
          name: "T. Suengchitthawon",
          firstname: "Thanawat",
          lastname: "Suengchitthawon",
          age: 23,
          birth: {
            date: "2000-01-08",
            place: null,
            country: "Thailand"
          },
          nationality: "Thailand",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/276086.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 278069,
          name: "T. King",
          firstname: "Toby James",
          lastname: "King",
          age: 21,
          birth: {
            date: "2002-01-04",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/278069.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 3295,
          name: "P. Tau",
          firstname: "Percy Muzi",
          lastname: "Tau",
          age: 29,
          birth: {
            date: "1994-05-13",
            place: "Witbank",
            country: "South Africa"
          },
          nationality: "South Africa",
          height: "175 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/3295.png"
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
              season: 2020
            },
            games: {
              appearences: 3,
              lineups: 1,
              minutes: 102,
              number: null,
              position: "Attacker",
              rating: "6.800000",
              captain: false
            },
            substitutes: {
              in: 2,
              out: 1,
              bench: 15
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 31,
              key: 3,
              accuracy: 8
            },
            tackles: {
              total: 1,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 13,
              won: 5
            },
            dribbles: {
              attempts: 3,
              success: 3,
              past: null
            },
            fouls: {
              drawn: 1,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18913,
          name: "A. Driscoll-Glennon",
          firstname: "Anthony David",
          lastname: "Driscoll-Glennon",
          age: 24,
          birth: {
            date: "1999-11-26",
            place: "Bootle",
            country: "England"
          },
          nationality: "England",
          height: "181 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18913.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-4.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 12
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18934,
          name: "H. Lewis",
          firstname: "Harry",
          lastname: "Lewis",
          age: 26,
          birth: {
            date: "1997-12-20",
            place: "Shrewsbury",
            country: "England"
          },
          nationality: "England",
          height: "191 cm",
          weight: "77 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18934.png"
        },
        statistics: [
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-4.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 18939,
          name: "K. Ramsay",
          firstname: "Kayne",
          lastname: "Ramsay",
          age: 23,
          birth: {
            date: "2000-10-10",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "179 cm",
          weight: "66 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18939.png"
        },
        statistics: [
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-4.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 1,
              lineups: 1,
              minutes: 90,
              number: null,
              position: "Defender",
              rating: "5.200000",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 13
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 19,
              key: null,
              accuracy: 15
            },
            tackles: {
              total: 5,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 7,
              won: 5
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: 1
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 41,
              name: "Southampton",
              logo: "https://media-4.api-sports.io/football/teams/41.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: "5.200000",
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 19,
              key: null,
              accuracy: 15
            },
            tackles: {
              total: 5,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 7,
              won: 5
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: 1
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 18952,
          name: "C. Austin",
          firstname: "Charlie",
          lastname: "Austin",
          age: 34,
          birth: {
            date: "1989-07-05",
            place: "Hungerford",
            country: "England"
          },
          nationality: "England",
          height: "188 cm",
          weight: "84 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/18952.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 5,
              lineups: 0,
              minutes: 132,
              number: null,
              position: "Attacker",
              rating: "6.460000",
              captain: false
            },
            substitutes: {
              in: 5,
              out: 0,
              bench: 8
            },
            shots: {
              total: 1,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 33,
              key: null,
              accuracy: 4
            },
            tackles: {
              total: 4,
              blocks: null,
              interceptions: 3
            },
            duels: {
              total: 31,
              won: 13
            },
            dribbles: {
              attempts: 2,
              success: 1,
              past: null
            },
            fouls: {
              drawn: 2,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19029,
          name: "K. McDonald",
          firstname: "Kevin David",
          lastname: "McDonald",
          age: 35,
          birth: {
            date: "1988-11-04",
            place: "Carnoustie",
            country: "Scotland"
          },
          nationality: "Scotland",
          height: "188 cm",
          weight: "82 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19029.png"
        },
        statistics: [
          {
            team: {
              id: 36,
              name: "Fulham",
              logo: "https://media-4.api-sports.io/football/teams/36.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 19108,
          name: "D. McGoldrick",
          firstname: "David James",
          lastname: "McGoldrick",
          age: 36,
          birth: {
            date: "1987-11-29",
            place: "Nottingham",
            country: "England"
          },
          nationality: "Republic of Ireland",
          height: "183 cm",
          weight: "74 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19108.png"
        },
        statistics: [
          {
            team: {
              id: 62,
              name: "Sheffield Utd",
              logo: "https://media-4.api-sports.io/football/teams/62.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 35,
              lineups: 28,
              minutes: 2402,
              number: null,
              position: "Attacker",
              rating: "6.842857",
              captain: false
            },
            substitutes: {
              in: 7,
              out: 12,
              bench: 9
            },
            shots: {
              total: 51,
              on: 24
            },
            goals: {
              total: 8,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 909,
              key: 17,
              accuracy: 19
            },
            tackles: {
              total: 33,
              blocks: 3,
              interceptions: 2
            },
            duels: {
              total: 455,
              won: 201
            },
            dribbles: {
              attempts: 81,
              success: 47,
              past: null
            },
            fouls: {
              drawn: 33,
              committed: 45
            },
            cards: {
              yellow: 7,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 19122,
          name: "R. Gotts",
          firstname: "Robbie",
          lastname: "Gotts",
          age: 24,
          birth: {
            date: "1999-11-09",
            place: "Harrogate",
            country: "England"
          },
          nationality: "England",
          height: "177 cm",
          weight: "71 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19122.png"
        },
        statistics: [
          {
            team: {
              id: 63,
              name: "Leeds",
              logo: "https://media-4.api-sports.io/football/teams/63.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          },
          {
            team: {
              id: 63,
              name: "Leeds",
              logo: "https://media-4.api-sports.io/football/teams/63.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 19165,
          name: "R. Tulloch",
          firstname: "Rayhaan Rahim Amari",
          lastname: "Tulloch",
          age: 22,
          birth: {
            date: "2001-01-20",
            place: "Birmingham",
            country: "England"
          },
          nationality: "England",
          height: "175 cm",
          weight: "65 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/19165.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Attacker",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 20386,
          name: "M. Macey",
          firstname: "Matthew Ryan",
          lastname: "Macey",
          age: 29,
          birth: {
            date: "1994-09-09",
            place: "Bath",
            country: "England"
          },
          nationality: "England",
          height: "201 cm",
          weight: "96 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/20386.png"
        },
        statistics: [
          {
            team: {
              id: 42,
              name: "Arsenal",
              logo: "https://media-4.api-sports.io/football/teams/42.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            team: {
              id: 42,
              name: "Arsenal",
              logo: "https://media-4.api-sports.io/football/teams/42.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 45027,
          name: "R. Inniss",
          firstname: "Ryan Stuart Clayton",
          lastname: "Inniss",
          age: 28,
          birth: {
            date: "1995-06-05",
            place: "London",
            country: "England"
          },
          nationality: "England",
          height: "197 cm",
          weight: "82 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/45027.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 138909,
          name: "D. Langley",
          firstname: "Daniel David",
          lastname: "Langley",
          age: 23,
          birth: {
            date: "2000-12-28",
            place: "Newcastle",
            country: "England"
          },
          nationality: "England",
          height: "201 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/138909.png"
        },
        statistics: [
          {
            team: {
              id: 34,
              name: "Newcastle",
              logo: "https://media-4.api-sports.io/football/teams/34.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Goalkeeper",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 1
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      },
      {
        player: {
          id: 151753,
          name: "T. Jenks",
          firstname: "Teddy Christopher",
          lastname: "Graham Jenks",
          age: 21,
          birth: {
            date: "2002-03-12",
            place: "Brighton",
            country: "England"
          },
          nationality: "England",
          height: "191 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/151753.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 152957,
          name: "L. Richards",
          firstname: "Lewis Paul Jimmy",
          lastname: "Richards",
          age: 22,
          birth: {
            date: "2001-10-15",
            place: "Liverpool",
            country: "Republic of Ireland"
          },
          nationality: "Republic of Ireland",
          height: "182 cm",
          weight: "72 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/152957.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 10
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 152975,
          name: "J. Cain",
          firstname: "Jake Steven",
          lastname: "Cain",
          age: 22,
          birth: {
            date: "2001-09-02",
            place: "Wigan",
            country: "England"
          },
          nationality: "England",
          height: "176 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/152975.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 180771,
          name: "M. Goodridge",
          firstname: "Mace Lewin",
          lastname: "Goodridge",
          age: 24,
          birth: {
            date: "1999-09-13",
            place: "Oldham",
            country: "England"
          },
          nationality: "England",
          height: "180 cm",
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/180771.png"
        },
        statistics: [
          {
            team: {
              id: 44,
              name: "Burnley",
              logo: "https://media-4.api-sports.io/football/teams/44.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 192348,
          name: "J. Soule",
          firstname: "Jamie",
          lastname: "Soule",
          age: 23,
          birth: {
            date: "2000-11-26",
            place: "Cheltenham",
            country: "England"
          },
          nationality: "England",
          height: "183 cm",
          weight: "75 kg",
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/192348.png"
        },
        statistics: [
          {
            team: {
              id: 60,
              name: "West Brom",
              logo: "https://media-4.api-sports.io/football/teams/60.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Attacker",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
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
          id: 282901,
          name: "J. Jenkins",
          firstname: "Jack",
          lastname: "Jenkins",
          age: 21,
          birth: {
            date: "2002-03-23",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/282901.png"
        },
        statistics: [
          {
            team: {
              id: 63,
              name: "Leeds",
              logo: "https://media-4.api-sports.io/football/teams/63.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 18
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 284327,
          name: "R. Welch",
          firstname: "Reece",
          lastname: "Belfield Welch",
          age: 20,
          birth: {
            date: "2003-09-19",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/284327.png"
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
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Defender",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      },
      {
        player: {
          id: 302844,
          name: "F. Maguire",
          firstname: "Frankie",
          lastname: "Maguire",
          age: 20,
          birth: {
            date: "2003-07-29",
            place: null,
            country: "England"
          },
          nationality: "England",
          height: null,
          weight: null,
          injured: false,
          photo: "https://media-4.api-sports.io/football/players/302844.png"
        },
        statistics: [
          {
            team: {
              id: 62,
              name: "Sheffield Utd",
              logo: "https://media-4.api-sports.io/football/teams/62.png"
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media-4.api-sports.io/football/leagues/39.png",
              flag: "https://media-4.api-sports.io/flags/gb.svg",
              season: 2020
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: "Midfielder",
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 4
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
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
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          }
        ]
      }
    ]
  }
}
