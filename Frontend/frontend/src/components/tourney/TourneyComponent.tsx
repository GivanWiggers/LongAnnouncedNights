import { Tourney } from "../../globalTypes";
import "./TourneyComponent.scss";
import GameImage from "../../assets/placeholder.png";
import { GiTrophyCup } from "react-icons/gi";

interface ITourneyComponentProps {
    tourney: Tourney;
}

export default function PartyComponent(props: ITourneyComponentProps) {
    console.log(props.tourney);
    return (
        <section className="TourneySection">
            {/* <p> TourneyID: {props.tourney.tourneyID}</p> */}

            <div className="Winner">
                <p> Winners: </p>
                {props.tourney.winner ? (
                    <div>
                        <h1>
                            <GiTrophyCup color="gold" />
                            {"         " + props.tourney.winner.name + "         "}
                            <GiTrophyCup />
                        </h1>
                        <div className="Players">
                            {props.tourney.winner.players.map((player) => {
                                return (
                                    <section key={player.user.id} className="PlayersWinner">
                                        <div className="PlayerWinnerDiv">
                                            <h3 className="PlayerName">{player.user.name}</h3>
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>
                            <GiTrophyCup color="gold" />
                            No winner yet
                            <GiTrophyCup />
                        </h1>
                    </div>
                )}
            </div>
            <div className="TourneyTeams">
                <h1>Participating Teams:</h1>
                <div className="Teams">
                    {props.tourney.teams.map((team) => {
                        return (
                            <section key={team.teamID} className="TeamSection">
                                <div className="TeamDiv">
                                    <h1 className="TeamName">{team.name}</h1>
                                    {team.players.map((player) => {
                                        return <h3>{player.user.name}</h3>;
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
            <section className="Tourney">
                <h1>Tourney:</h1>
                <img src="https://challonge.com/mxmk68w5.svg"></img>
            </section>
        </section>
    );
}
