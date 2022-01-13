import "./TourneyMakerPage.scss";
import { useEffect, useState } from "react";
import GameImage from "../../assets/placeholder.png";
import { Game, Party, Tourney, User } from "../../globalTypes";
import RAWGAPI from "../../api/RAWGAPI";
import {
    Autocomplete,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import InviteTable from "../../components/invitations/InviteTable";

export default function TourneyMakerPage() {
    // const [games, setGames] = useState<Game[]>();
    // const [tourney, setTourney] = useState<Tourney>();
    //
    //UITGECOMMENT OM API KEY NIET OP TE MAKEN
    // async function getGames() {
    //     let games = await RAWGAPI.getGames();
    //     setGames(games);
    //     console.log(games);
    // }
    //
    // //called once at loading the page
    // useEffect(() => {
    //     getGames();
    // }, []);

    //Game AutoComplete
    const [gamesString, setGamesString] = useState<string[]>([]);
    const [games, setGames] = useState<Game[]>();
    const options = ["Option 1", "Option 2"];
    const [game, setGame] = useState<string | null>(gamesString[0]);
    const [inputValue, setInputValue] = useState("");
    const [gameIm, setGameIm] = useState<string>(GameImage);

    //TourneyStyle
    const [tourneyStyle, setTourneyStyle] = useState<string>("");
    const handleChangeSelect = (event: SelectChangeEvent) => {
        setTourneyStyle(event.target.value as string);
    };
    //Checkboxes
    const [checkedSkipCon, setCheckedSkipCon] = useState(true);
    const [checkedSkipGran, setCheckedSkipGran] = useState(true);
    const [checkedRandom, setCheckedRandom] = useState(true);
    const [checkedSkipSec, setCheckedSkipSec] = useState(true);

    const handleChangeCheckBoxSkipCon = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedSkipCon(event.target.checked);
    };
    const handleChangeCheckBoxSkipGran = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedSkipGran(event.target.checked);
    };
    const handleChangeCheckBoxRandom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedRandom(event.target.checked);
    };
    const handleChangeCheckBoxSkipSec = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedSkipSec(event.target.checked);
    };
    const [party, setParty] = useState<Party>();

    let user1: User = {
        id: 66,
        name: "User2",
        email: "user2@gmail.com",
        password: "",
    };

    //console.log(games);
    // console.log(gamesString);
    // console.log(gameIm);
    // console.log(checkedSkipCon);

    //BEPERK API
    async function getAllGames() {
        if (games == null) {
            console.log("it read again");
            let gameslist = await RAWGAPI.getGames();
            setGames(gameslist.results);
            var result = gameslist.results.map((game) => game.name);
            setGamesString(result);
        }
    }

    async function getGameImage() {
        console.log("searching for game Image");
        games?.forEach((element) => {
            if (element.name === game) {
                setGameIm(element.background_image);
            }
        });
    }

    useEffect(() => {
        getAllGames(); //BEPERK API
        getGameImage();
    }, [setGame]);

    return (
        <div className="Fullpage">
            <section className="InfoSection">
                <div className="Game">
                    {game ? (
                        <div>
                            <img className="GameImage" alt="Game Image" src={gameIm} />
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
                        value={game}
                        onChange={(event: any, newValue: string | null) => {
                            setGame(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={gamesString}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Select Game" />}
                    />
                </div>
                <div className="Party">
                    <h1>Party Title:</h1>
                    {/* <input></input> */}
                    <TextField id="standard-basic" label="Create a Title" variant="standard" />
                    <h1>Tourney:</h1>
                    <div className="SelectTourney">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Tourney type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={tourneyStyle}
                                label="Age"
                                onChange={handleChangeSelect}
                            >
                                <MenuItem value={0}>None</MenuItem>
                                <MenuItem value={1}>fourSingle</MenuItem>
                                <MenuItem value={2}>sixSingle</MenuItem>
                                <MenuItem value={3}>fourDouble</MenuItem>
                                <MenuItem value={4}>sixDouble</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="TourneyInfo">
                        <div className="Half">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: "#e2b514",
                                                "&.Mui-checked": {
                                                    color: "#e2b514",
                                                },
                                            }}
                                            checked={checkedSkipCon}
                                            onChange={handleChangeCheckBoxSkipCon}
                                            inputProps={{ "aria-label": "controlled" }}
                                        />
                                    }
                                    label="Skip consolation round"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: "#e2b514",
                                                "&.Mui-checked": {
                                                    color: "#e2b514",
                                                },
                                            }}
                                            checked={checkedSkipGran}
                                            onChange={handleChangeCheckBoxSkipGran}
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
                                            sx={{
                                                color: "#e2b514",
                                                "&.Mui-checked": {
                                                    color: "#e2b514",
                                                },
                                            }}
                                            checked={checkedRandom}
                                            onChange={handleChangeCheckBoxRandom}
                                            inputProps={{ "aria-label": "controlled" }}
                                        />
                                    }
                                    label="Randomize seeds"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: "#e2b514",
                                                "&.Mui-checked": {
                                                    color: "#e2b514",
                                                },
                                            }}
                                            checked={checkedSkipSec}
                                            onChange={handleChangeCheckBoxSkipSec}
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
            <section className="InvitationSection">
                <form>
                    <h1> Invite your friends to join! </h1>
                    <InviteTable users={user1} />
                </form>
            </section>
        </div>
    );
}
