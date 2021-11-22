import { Tourney } from "../../globalTypes";
import "./TourneyComponent.scss";
import GameImage from "../../assets/placeholder.png";

interface ITourneyComponentProps {
    tourney: Tourney;
}

export default function PartyComponent(props: ITourneyComponentProps) {
    console.log(props.tourney);
    return (
        <section className="TourneySection">
            <p> TourneyID: {props.tourney?.tourneyID}</p>
        </section>
    );
}
