import { Party } from "../../globalTypes";
import "./PartyComponent.scss";
import GameImage from "../../assets/placeholder.png";

interface IPartyComponentProps {
    party: Party;
}

export default function PartyComponent(props: IPartyComponentProps) {
    console.log(props.party);
    return (
        <section className="InfoSection">
            <div className="Game">
                <img className="GameImage" alt="Game Image" src={GameImage} />
                <input placeholder="Select game" value={props.party.game} disabled />
            </div>
            <div className="Party">
                <h1>Party Title:</h1>
                <input value={props.party.title} disabled />
                <h1>Tourney:</h1>
                <h2>Type:</h2>
                <input value={props.party.tourneystyle} />
                <div className="TourneyInfo">
                    <div className="Half">
                        <div>
                            <h3>Skip consolation round</h3>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <h3>Skip grandFinal comeback</h3>
                            <input type="checkbox" />
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
    );
}
