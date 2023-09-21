export class AppConstants {
    public static readonly MY_PLAYERS_KEY = 'my-players';
    public static readonly WORLD_CUP_ID = 1;
    public static readonly SEASON = 2022;
    public static readonly MIN_DEFENDERS = 4;
    public static readonly MIN_MIDFIELDERS = 4;
    public static readonly MIN_STRIKERS = 2;
    public static readonly MIN_GOALKEEPERS = 2;
}

export class Messages {
    public static readonly MISSING_PLAYERS: string = `
        Remember your team must have a coach and at least
        ${ AppConstants.MIN_DEFENDERS } Defenders -
        ${ AppConstants.MIN_MIDFIELDERS } Midfielders
        - ${ AppConstants.MIN_GOALKEEPERS } Goalkeepers -
        ${ AppConstants.MIN_STRIKERS } Strikers 
    `;
} 