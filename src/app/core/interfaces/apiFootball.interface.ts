import { Pagination } from "./pagination.interface"
import { Player } from "./player.interface"

export interface GeneralResponse {
    get: string,
    parameters: Parameters,
    errors: any[],
    results: number,
    paging: Pagination,
    response: ResponseData[]
}


export interface Parameters {
    league: string
    page: string
    season: string
}

export interface ResponseData {
    player: Player
    statistics: Statistic[]
}

export interface Statistic {
    team: Team
    league: League
    games: Games
    substitutes: Substitutes
    shots: Shots
    goals: Goals
    passes: Passes
    tackles: Tackles
    duels: Duels
    dribbles: Dribbles
    fouls: Fouls
    cards: Cards
    penalty: Penalty
}

export interface Team {
    id: number
    name: string
    logo: string
}

export interface League {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
}

export interface Games {
    appearences: number | null;
    lineups: number | null;
    minutes: number | null;
    number: any | null;
    position: string | null;
    rating?: string | null;
    captain: boolean | null;
}

export interface Substitutes {
    in: number | null;
    out: number | null;
    bench: number | null;
}

export interface Shots {
    total?: number | null;
    on?: number | null;
}
  
export interface Goals {
    total: number | null;
    conceded?: number | null;
    assists?: number | null;
    saves: any | null;
}
  
export interface Passes {
    total?: number | null;
    key?: number | null;
    accuracy?: number | null;
}
  
export interface Tackles {
    total?: number | null;
    blocks?: number | null;
    interceptions?: number | null;
}
  
export interface Duels {
    total?: number | null;
    won?: number | null;
}

export interface Dribbles {
	attempts?: number | null;
	success?: number | null;
	past: any | null;
  }
  
export interface Fouls {
	drawn?: number | null;
	committed?: number | null;
}
  
export interface Cards {
	yellow: number | null;
	yellowred: number | null;
	red: number | null;
}
  
export interface Penalty {
	won: any | null;
	commited: any | null;
	scored?: number | null;
	missed?: number | null;
	saved?: number | null;
}