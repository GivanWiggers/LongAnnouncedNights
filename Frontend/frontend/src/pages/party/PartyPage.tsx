import "./PartyPage.scss";
import { useCallback, useEffect, useState } from "react";
import PartyComponent from "../../components/party/PartyComponent";
import TourneyComponent from "../../components/tourney/TourneyComponent";
import { Game, Party, Tourney } from "../../globalTypes";
import PartyAPI from "../../api/PartyAPI";
import RAWGAPI from "../../api/RAWGAPI";

export default function PartyPage() {
    const [party, setParty] = useState<Party>();

    async function getParty() {
        const party = await PartyAPI.getParty(1);
        const string = party.game.replace(/\s/g, "-");
        //party.gameImage = await (await RAWGAPI.getGame(string)).background_image; //API BESPAREN
        setParty(party);
        console.log(party);
    }

    useEffect(() => {
        getParty();
    }, []);

    return (
        <div className="Fullpage">
            {party ? (
                <div>
                    <PartyComponent party={party} />

                    <TourneyComponent tourney={party.tourney} />
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
