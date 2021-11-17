import { AxiosResponse } from "axios";
import { Party } from "../globalTypes";
import instance from "./APIinstance";

export default class PartyAPI{

    //GET Party by PartyID
    static getParty = async(partyId : number) => {
        const res: AxiosResponse<Party> = await instance.get(`/party/read?party_id=${partyId}`)

        return res.data
    }

    //GET all Parties attended by UserID
    static getParties = async(userId : number) => {
        const res: AxiosResponse<Party[]> = await instance.get(`/party/readall?user_id=${userId}`)

        return res.data
    }
}