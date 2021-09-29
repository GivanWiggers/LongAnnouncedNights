using LAN_Enums;
using LAN_ILOGIC.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Models
{
    public class Party: IParty
    {
        public int PartyID { get; private set; }
        public int UserID { get; private set; }
        public int TourneyID { get; private set; }
        public string Title { get; private set; }
        public string Game { get; private set; }
        public TourneyStyleEnum Tourneystyle { get; private set; }
        public DateTime DateOfParty { get; set; }
        public List<IDate> Dates { get; set; }

        public Party(int partyID, int userID,int tourneyID, string title, string game, TourneyStyleEnum tourneyStyle)
        {
            PartyID = partyID;
            UserID = userID;
            TourneyID = tourneyID;
            Title = title;
            Game = game;
            Tourneystyle = tourneyStyle;
        }
    }
}
