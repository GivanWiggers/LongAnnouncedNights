import "./HistoryPage.scss";
import { useEffect, useState } from "react";
import GameImage from "../../assets/placeholder.png";
import PartyAPI from "../../api/PartyAPI";
import { Party } from "../../globalTypes";

export default function HistoryPage() {
    const [party, setParty] = useState<Party>();
    const [parties, setParties] = useState<Party[]>([]);

    // async function getParty() {
    //   let party = await PartyAPI.getParty(1)
    //   console.log(party);

    //   setParty(party);
    // }

    //called once at loading the page
    // useEffect(() => {
    //   getParty()
    // }, [getParty])

    async function getParties() {
        let parties = await PartyAPI.getParties(1);
        setParties(parties);
    }

    //called once at loading the page
    useEffect(() => {
        getParties();
    }, [getParties]);

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
                                <img className="GameImage" alt="Game Image" src={GameImage} />{" "}
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
