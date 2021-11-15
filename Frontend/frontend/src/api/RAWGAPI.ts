import { AxiosResponse } from "axios";
import { Game } from "../globalTypes";
import instance from "./APIRAWGInstance";

export default class RAWGAPI{
    static getGame = async(gameIdOrName : string) => {
        const res: AxiosResponse<Game> = await instance.get(`/games/${gameIdOrName}?key=a2fcfd7ca8d8413fab61623dc7355475`)

        return res.data
    }

    
    static getGames = async() => {
        const res: AxiosResponse<Game[]> = await instance.get(`/games?key=a2fcfd7ca8d8413fab61623dc7355475`)

        return res.data
    }
}