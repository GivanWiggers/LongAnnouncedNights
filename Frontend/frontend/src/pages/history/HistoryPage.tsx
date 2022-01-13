import "./HistoryPage.scss";
import { useEffect, useState } from "react";
import GameImage from "../../assets/placeholder.png";
import PartyAPI from "../../api/PartyAPI";
import RAWGAPI from "../../api/RAWGAPI";
import { Game, Party } from "../../globalTypes";
import { useHistory } from "react-router-dom";

export default function HistoryPage() {
    const [party, setParty] = useState<Party>();
    const [parties, setParties] = useState<Party[]>([]);
    const [game, setGame] = useState<Game>();

    const [games, setGames] = useState<Game[]>([]);
    const [gameImages, setImages] = useState<string[]>([]);

    const history = useHistory();
    //COMMENTED OM MIJ API KEY TE BESPAREN
    async function getGame(gamestring: string) {
        gamestring = gamestring.replace(/\s/g, "-");
        let game = await RAWGAPI.getGame(gamestring);
        setGame(game);
        if (games.includes(game)) {
        } else {
            games.push(game);
        }
        console.log(game);
        //console.log(game);
    }

    console.log(games);

    async function getParties() {
        let parties = await PartyAPI.getParties(1);
        parties.forEach((element) => {
            getGame(element.game); // BEPERK API
            console.log(games);
            games.forEach((g) => {
                if (g.name === element.game) {
                    element.gameImage = g.background_image;
                }
            });

            console.log(game?.background_image);
        });
        setParties(parties);
    }

    //called once at loading the page
    useEffect(() => {
        getParties();
    }, []);

    return (
        <div className="Fullpage Fullpage-High-Stripe">
            <section className="HistorySection">
                {parties.map((party) => {
                    return (
                        <section key={party.partyID} className="HistoryItem">
                            <div className="HistoryObject" onClick={() => history.push("party")}>
                                <div className="HistoryObjectTitle">
                                    <h1 className="Titel">{party.title}</h1>
                                </div>
                                <h2 className="PartyTourney">{party ? "Party" : "Tourney"} </h2>
                                <h2 className="Date">{new Date(party.dateOfParty).toDateString()}</h2>
                                {/* <img className="GameImage" alt="Game Image" src={GameImage} />{" "} */}
                                <img className="GameImage" alt="Game Image" src={party?.gameImage} />{" "}
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
