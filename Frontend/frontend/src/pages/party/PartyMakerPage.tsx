import "./PartyMakerPage.scss";
import { useState, useEffect } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/yellow.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import PartyComponent from "../../components/party/PartyComponent";
import { Game, Party } from "../../globalTypes";
import GameImage from "../../assets/placeholder.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RAWGAPI from "../../api/RAWGAPI";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";

export default function PartyMakerPage() {
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
    //Dates Calender
    const [value, setValue] = useState<DateObject[]>([]);
    //const [time, setTime] = useState<Date>();
    const [timeSetter, setTimeSetter] = useState<Date>(new Date());

    const [party, setParty] = useState<Party>();

    //console.log(time?.getHours(), time?.getMinutes());
    //console.log(value.map((v) => new Date(v.year, v.month.number - 1, v.day, v.hour, v.minute).toLocaleString()));
    //console.log(games);
    //console.log(gamesString);
    //console.log(gameIm);
    //console.log(checkedSkipCon);

    function SetTimeSetterHoursAndMinutes(hours: number, minutes: number) {
        if (hours && minutes) {
            setTimeSetter(new Date(0, 0, 0, hours, minutes));
            //console.log(timeSetter.toLocaleString());
            SetAllTimes(timeSetter);
        }
    }

    function SetAllTimes(time: Date) {
        if (time) {
            //setTime(time);
            value.forEach((element) => {
                element.setHour(time.getHours());
                element.setMinute(time.getMinutes());
            });
        }
    }

    //BEPERK API
    // async function getAllGames() {
    //     if (games == null) {
    //         console.log("it read again");
    //         let gameslist = await RAWGAPI.getGames();
    //         setGames(gameslist.results);
    //         var result = gameslist.results.map((game) => game.name);
    //         setGamesString(result);
    //     }
    // }

    async function getGameImage() {
        console.log("searching for game Image");
        games?.forEach((element) => {
            if (element.name === game) {
                setGameIm(element.background_image);
            }
        });
    }

    useEffect(() => {
        SetAllTimes(timeSetter!);
        //getAllGames(); BEPERK API
        getGameImage();
    }, [SetTimeSetterHoursAndMinutes, setGame, setValue]);

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
                                <MenuItem value={1}>Ten</MenuItem>
                                <MenuItem value={2}>Twenty</MenuItem>
                                <MenuItem value={3}>Thirty</MenuItem>
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
            <section className="CalenderSection">
                <form>
                    <h1> Select your prefered dates and times </h1>

                    <Calendar
                        multiple
                        numberOfMonths={2}
                        weekStartDayIndex={1}
                        format="DD/MM/YYYY HH:mm"
                        className="yellow rmdp-mobile"
                        value={value}
                        onChange={(dates: DateObject[]) => setValue(dates)}
                        plugins={[<DatePanel sort="date" />, <TimePicker hideSeconds />]}

                        // mapDays={({ date, selectedDate, isSameDate }) => {
                        //   let props = {}
                        //   props.style = {
                        //     borderRadius: "3px"
                        //   }

                        //   if (isSameDate(date, selectedDate: DateObject)) props.style = {
                        //     ...props.style,
                        //     color: "black",
                        //     backgroundColor: "yellow",
                        //     fontWeight: "bold",
                        //     border: "1px solid #777"
                        //   }

                        //   return props
                        // }}
                    />
                    <form>
                        <div className="setDateDiv">
                            <h1 className="SetDate"> Set Time for all dates:</h1>
                            <input
                                type="time"
                                onChange={(e) =>
                                    SetTimeSetterHoursAndMinutes(
                                        (e.target.valueAsDate?.getHours() as number) - 1,
                                        e.target.valueAsDate?.getMinutes() as number
                                    )
                                }
                            />
                            <form
                            // onClick={() =>
                            //     SetTimeSetterHoursAndMinutes(timeSetter!.getHours(), timeSetter!.getMinutes())
                            // }
                            >
                                {" "}
                                CLICK ON THIS{" "}
                            </form>
                        </div>
                        {/* <button onClick={() => SetAllTimes(timeSetter)}>CLICK ME!</button> */}
                    </form>

                    <div className="Dates">
                        {value
                            .sort(
                                (b, a) =>
                                    new Date(b.year, b.month.number - 1, b.day).getTime() -
                                    new Date(a.year, a.month.number - 1, a.day).getTime()
                            )
                            .map((d) => {
                                return (
                                    <section className="DateItem" key={value.indexOf(d)}>
                                        <h1>
                                            {new Date(
                                                d.year,
                                                d.month.number - 1,
                                                d.day,
                                                d.hour,
                                                d.minute
                                            ).toLocaleString()}
                                        </h1>
                                    </section>
                                );
                            })}
                    </div>
                </form>
            </section>
        </div>
    );
}
