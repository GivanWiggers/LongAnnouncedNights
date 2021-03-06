export type Party = {
    partyID: number;
    user: User;
    tourney: Tourney;
    title: string
    game: string;
    tourneystyle: TourneyStyleEnum;
    dateOfParty: Date;
    dates: Date[];
    gameImage: string;
  };

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export type Team = {
    teamID: number;
    name: string;
    players: UserInTeam[];
};

export type UserInTeam = {
    teamID: number;
    user: User;
}
export type Tourney = {
    tourneyID: number;
    user: User;
    winner: Team;
    typeof: TourneyStyleEnum;
    teams: Team[];
};
export enum TourneyStyleEnum  {
    None,
    fourSingle,
    sixSingle,
    fourDouble,
    sixDouble,
};

export type Game ={
    id: number;
    slug: string;
    name: string;
    background_image: string;
}

export type APIGames ={
    count: number;
    previous: string;
    next: string;
    results: Game[];
}
