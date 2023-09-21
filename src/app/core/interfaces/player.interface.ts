export interface Player {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number | null;
    birth: Birth;
    nationality: string;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string;
}
  
export interface Birth {
    date: string | null;
    place: string | null;
    country: string | null;
}

export enum POSITION {
    str = 'Striker',
    def = "Defender",
    mid = "Midfielder",
    gk = 'Goalkeeper'
}