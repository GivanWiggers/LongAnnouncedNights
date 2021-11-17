import { AxiosResponse } from "axios";
import { Game } from "../globalTypes";
import RAWGinstance from "./APIRAWGInstance";

export default class RAWGAPI{


    //GET Game with GameId or Game Name
    static getGame = async(gameIdOrName : string) => {
        const res: AxiosResponse<Game> = await RAWGinstance.get(`/games/${gameIdOrName}?key=27e66b41a2df402e9311c5328210ea8e`)
        return res.data
    }

    //GET All Games
    static getGames = async() => {
        const res: AxiosResponse<Game[]> = await RAWGinstance.get(`/games?key=27e66b41a2df402e9311c5328210ea8e`)
        return res.data
    }
}