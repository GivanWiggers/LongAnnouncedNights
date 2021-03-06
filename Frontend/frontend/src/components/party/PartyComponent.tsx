import { Party } from "../../globalTypes";
import "./PartyComponent.scss";
import GameImage from "../../assets/placeholder.png";
import {
    Autocomplete,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

interface IPartyComponentProps {
    party: Party;
}

export default function PartyComponent(props: IPartyComponentProps) {
    console.log(props.party);
    return (
        <section className="InfoSection">
            <div className="Game">
                {props.party.gameImage ? (
                    <div>
                        <img className="GameImage" alt="Game Image" src={props.party.gameImage} />
                    </div>
                ) : (
                    <div>
                        <img className="GameImage" alt="Game Image" src={GameImage} />
                    </div>
                )}
                {/* <input placeholder="Select game"></input> */}
                {/* <div>{`game: ${game !== null ? `'${game}'` : "null"}`}</div>
                    <div>{`inputValue: '${inputValue}'`}</div> */}
                <br />
                <Autocomplete
                    disabled
                    value={props.party.game}
                    id="controllable-states-demo"
                    options={new Array()}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select Game" />}
                />
            </div>
            <div className="Party">
                <h1>Party Title:</h1>
                {/* <input></input> */}
                <TextField id="standard-basic" label={props.party.title} variant="standard" disabled />
                <h1>Tourney:</h1>
                <div className="SelectTourney">
                    <TextField id="standard-basic" label={props.party.tourney.typeof} variant="standard" disabled />
                </div>
                <div className="TourneyInfo">
                    <div className="Half">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled
                                        sx={{
                                            color: "#e2b514",
                                            "&.Mui-checked": {
                                                color: "#e2b514",
                                            },
                                        }}
                                        checked={props.party.tourney.typeof ? true : false}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                }
                                label="Skip consolation round"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled
                                        sx={{
                                            color: "#e2b514",
                                            "&.Mui-checked": {
                                                color: "#e2b514",
                                            },
                                        }}
                                        checked={props.party.tourney.typeof ? true : false}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                }
                                label="Skip grandfinal comeback"
                            />
                        </FormGroup>
                    </div>
                    <div className="Half">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled
                                        sx={{
                                            color: "#e2b514",
                                            "&.Mui-checked": {
                                                color: "#e2b514",
                                            },
                                        }}
                                        checked={props.party.tourney.typeof ? true : false}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                }
                                label="Randomize seeds"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled
                                        sx={{
                                            color: "#e2b514",
                                            "&.Mui-checked": {
                                                color: "#e2b514",
                                            },
                                        }}
                                        checked={props.party.tourney.typeof ? true : false}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                }
                                label="Skip secondary final"
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </section>
        // <section className="InfoSection">
        //     <div className="Game">
        //         {props.party.game ? (
        //             <div>
        //                 <img className="GameImage" alt="Game Image" src={props.party.gameImage} />
        //             </div>
        //         ) : (
        //             <div>
        //                 <img className="GameImage" alt="Game Image" src={GameImage} />
        //             </div>
        //         )}
        //         <input placeholder="Select game" value={props.party.game} disabled />
        //     </div>
        //     <div className="Party">
        //         <h1>Party Title:</h1>
        //         <input value={props.party.title} disabled />
        //         <h1>Tourney:</h1>
        //         <h2>Type:</h2>
        //         <input value={props.party.tourneystyle} />
        //         <div className="TourneyInfo">
        //             <div className="Half">
        //                 <div>
        //                     <h3>Skip consolation round</h3>
        //                     <input type="checkbox" />
        //                 </div>
        //                 <div>
        //                     <h3>Skip grandFinal comeback</h3>
        //                     <input type="checkbox" />
        //                 </div>
        //             </div>
        //             <div className="Half">
        //                 <div>
        //                     <h3>Skip secondary final</h3>
        //                     <input type="checkbox"></input>
        //                 </div>
        //                 <div>
        //                     <h3>Randomize seeds</h3>
        //                     <input type="checkbox"></input>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}
