import "./HistoryPage.scss";
import { useEffect, useState } from "react";
import GameImage from "../../assets/placeholder.png";
import PartyAPI from "../../api/PartyAPI";
import RAWGAPI from "../../api/RAWGAPI";
import { Game, Party } from "../../globalTypes";

export default function HistoryPage() {
    const [party, setParty] = useState<Party>();
    const [parties, setParties] = useState<Party[]>([]);
    const [game, setGame] = useState<Game>();

    //COMMENTED OM MIJ API KEY TE BESPAREN
    async function getGame(gamestring: string) {
        gamestring = gamestring.replace(/\s/g, "-");
        let game = await RAWGAPI.getGame(gamestring);
        let game1 = setGame(game);
        console.log(game);
    }

    async function getParties() {
        let parties = await PartyAPI.getParties(1);
        parties.forEach((element) => {
            getGame(element.game);
            element.gameImage = game?.background_image as string; //DIT WERKT NIET EN IDK WHY
            console.log(game?.background_image);
        });
        // parties.map((element) => {
        //     getGame(element.game);
        //     element.gameImage = game?.background_image as string; //DIT WERKT NIET EN IDK WHY
        //     console.log(element.gameImage);
        // });
        setParties(parties);
    }

    //called once at loading the page
    useEffect(() => {
        getParties();
    }, []);

    return (
        <div className="Fullpage Fullpage-No-Stripe">
            <section className="HistorySection">
                {parties.map((party) => {
                    return (
                        <section key={party.partyID} className="HistoryItem">
                            <div className="HistoryObject">
                                <div className="HistoryObjectTitle">
                                    <h1 className="Titel">{party.title}</h1>
                                </div>
                                <h2 className="PartyTourney">{party ? "Party" : "Tourney"} </h2>
                                <h2 className="Date">{new Date(party.dateOfParty).toDateString()}</h2>
                                {/* <img className="GameImage" alt="Game Image" src={GameImage} />{" "} */}
                                <img className="GameImage" alt="Game Image" src={party?.gameImage} />{" "}
                                {/* Nog API aan koppelen */}
                                <h2 className="GameStats">Game: {party.game}</h2>
                                <h2 className="GameStats">Winner: {party.tourney.winner.name} </h2>
                                <h2 className="GameStats">Tourney: {party.tourney.tourneyID}</h2>
                            </div>
                        </section>
                    );
                })}
            </section>
        </div>
    );
}
