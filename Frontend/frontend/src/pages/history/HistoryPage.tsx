import './HistoryPage.scss'
import { useState } from "react"
import { Calendar, DateObject } from 'react-multi-date-picker'
import DatePanel from "react-multi-date-picker/plugins/date_panel" 
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/yellow.css"
import "react-multi-date-picker/styles/layouts/mobile.css"



export default function HistoryPage() {
  const [value, setValue] = useState<DateObject[]>([])
  console.log(value);
  
  console.log(value.map(v => new Date(v.year, v.month.number -1, v.day, v.hour, v.minute).toLocaleString()));
  

  return (
      <div className="Fullpage">
        <section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section>
        <section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section><section className="HistoryItem">
          <div className="HistoryObject">
            <div className="HistoryObjectTitle">
              <h1 className="Titel"> Titel</h1>
            </div>
            <h2 className="PartyTourney">Party or Tourney </h2>
            <h2 className="Date">Date 00-00-0000 </h2>
            {/* <img className="GameImage" alt="Game Image" src={""} /> */}
            <div className="GameImage"></div>
            <h2 className="GameStats">Game: Type of game</h2>
            <h2 className="GameStats">Winner: </h2>
            <h2 className="GameStats">Tourney: </h2>
          </div>
        </section>
      </div>
  )
}

