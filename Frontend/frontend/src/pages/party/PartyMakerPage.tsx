import "./PartyMakerPage.scss";
import { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/yellow.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import GameImage from "../../assets/placeholder.png";
import PartyComponent from "../../components/party/PartyComponent";
import { Party } from "../../globalTypes";

export default function PartyMakerPage() {
    const [value, setValue] = useState<DateObject[]>([]);
    const [party, setParty] = useState<Party>();

    console.log(value);

    console.log(value.map((v) => new Date(v.year, v.month.number - 1, v.day, v.hour, v.minute).toLocaleString()));

    return (
        <div className="Fullpage">
            <section className="InfoSection">
                <PartyComponent party={party!} />

                {/* <div className="Game">
                    <img className="GameImage" alt="Game Image" src={GameImage} />
                    <input placeholder="Select game"></input>
                </div>
                <div className="Party">
                    <h1>Party Title:</h1>
                    <input></input>
                    <h1>Tourney:</h1>
                    <h2>Type:</h2>
                    <input></input>
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
                </div> */}
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
                </form>
            </section>
        </div>
    );
}
