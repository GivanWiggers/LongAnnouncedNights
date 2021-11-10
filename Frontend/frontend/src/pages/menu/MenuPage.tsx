import './MenuPage.scss'
import { useHistory } from 'react-router';
//import { useState } from "react"



export default function MenuPage() {
  const history = useHistory();

  return (
      <div className="Fullpage">
        <section className="MenuSection">
        <section className="MenuItem">
          <div className="MenuObject" onClick={() => history.push("history")}>
            <h1 className="Title">Manage</h1>
          </div>
        </section><section className="MenuItem">
          <div className="MenuObject" onClick={() => history.push("partymaker")}>
            <h1 className="Title">New Party</h1>
          </div>
        </section><section className="MenuItem">
          <div className="MenuObject" onClick={() => history.push("tourneymaker")}>
            <h1 className="Title">New Tourney</h1>
          </div>
        </section>
        </section>
      </div>
  )
}

