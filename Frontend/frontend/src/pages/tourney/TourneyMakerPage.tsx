import './TourneyMakerPage.scss'
import { useState } from "react"

import GameImage from "../../assets/placeholder.png";



export default function TourneyMakerPage() {

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
        <section className="InvitationSection">
        <form>
          <h1> Invite your friends to join! </h1>
        </form>
        </section>
      </div>
  )
}

