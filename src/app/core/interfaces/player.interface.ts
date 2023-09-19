export interface Player {
    id: number
    name: string
    firstname: string
    lastname: string
    age: number
    birth: Birth
    nationality: string
    height: string
    weight: string
    injured: boolean
    photo: string,
    position: POSITION;
}
  
export interface Birth {
    date: string
    place: string
    country: string
}

export enum POSITION {
    str = 'Striker',
    def = "Defender",
    mid = "Midfielder",
    gk = 'Goalkeeper'
}