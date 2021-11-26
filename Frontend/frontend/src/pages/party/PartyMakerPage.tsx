import "./PartyMakerPage.scss";
import { useState, useEffect } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/yellow.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import PartyComponent from "../../components/party/PartyComponent";
import { Party } from "../../globalTypes";
import GameImage from "../../assets/placeholder.png";

export default function PartyMakerPage() {
    const [value, setValue] = useState<DateObject[]>([]);
    //const [time, setTime] = useState<Date>();
    const [party, setParty] = useState<Party>();
    const [timeSetter, setTimeSetter] = useState<Date>(new Date(2022, 12, 13, 19, 30));

    //console.log(time?.getHours(), time?.getMinutes());

    console.log(value.map((v) => new Date(v.year, v.month.number - 1, v.day, v.hour, v.minute).toLocaleString()));

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
    useEffect(() => {
        SetAllTimes(timeSetter);
    }, [SetTimeSetterHoursAndMinutes]);

    return (
        <div className="Fullpage">
            <section className="InfoSection">
                <div className="Game">
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
                                // onChange={(e) =>
                                //     SetTimeSetterHoursAndMinutes(
                                //         (e.target.valueAsDate?.getHours() as number) - 1,
                                //         e.target.valueAsDate?.getMinutes() as number
                                //     )
                                // }
                            />
                            <form
                                onClick={() =>
                                    SetTimeSetterHoursAndMinutes(timeSetter.getHours(), timeSetter.getMinutes())
                                }
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
