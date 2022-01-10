import "./TourneyMakerPage.scss";
import { useEffect, useState } from "react";

import GameImage from "../../assets/placeholder.png";
import { Game, Tourney } from "../../globalTypes";
import RAWGAPI from "../../api/RAWGAPI";

export default function TourneyMakerPage() {
    const [games, setGames] = useState<Game[]>();
    const [tourney, setTourney] = useState<Tourney>();

    //UITGECOMMENT OM API KEY NIET OP TE MAKEN
    // async function getGames() {
    //     let games = await RAWGAPI.getGames();
    //     setGames(games);
    //     console.log(games);
    // }

    // //called once at loading the page
    // useEffect(() => {
    //     getGames();
    // }, []);

    return (
        <div className="Fullpage">
            <section className="InfoSection">
                <div className="Game">
                    <img className="GameImage" alt="Game Image" src={GameImage} />
                    <input placeholder="Select game"></input>
                </div>
                <div className="Party">
                    <h1>Title:</h1>
                    <input></input>
                    <h1>Tourney:</h1>
                    <h2>Type:</h2>
                    {/* <input></input> */}
                    <select placeholder="Select Tournament:">
                        <option value="0">Select tournament:</option>
                        <option value="1">None</option>
                        <option value="2">Single Elimination</option>
                        <option value="3">Double Elimination</option>
                        <option value="4">Round Robin</option>
                        <option value="5">Swiss</option>
                        <option value="6">Free for All</option>
                        <option value="7">Leaderboard</option>
                    </select>

                    <div className="TourneyInfo">
                        <div className="Half">
                            <div>
                                <h3>Skip consolation round</h3>
                                <input type="checkbox"></input>
                            </div>
                            <div>
                                <h3>Skip grandFinal comeback</h3>
                                <input type="checkbox"></input>
                            </div>
                        </div>
                        <div className="Half">
                            <div>
                                <h3>Skip secondary final</h3>
                                <input type="checkbox"></input>
                            </div>
                            <div>
                                <h3>Randomize seeds</h3>
                                <input type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="InvitationSection">
                <form>
                    <h1> Invite your friends to join! </h1>
                </form>
            </section>
        </div>
    );
}
