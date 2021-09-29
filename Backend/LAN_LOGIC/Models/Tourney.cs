using LAN_Enums;
using LAN_ILOGIC.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Models
{
    public class Tourney: ITourney
    {
        public int TourneyID { get; private set; }
        public int UserID { get; private set; }
        public ITeam Winner { get; private set; }
        public TourneyStyleEnum Type { get; private set; }
        public List<ITeam> Teams { get; set; }

        public Tourney(int tourneyID, int userID, Team winner, TourneyStyleEnum type)
        {
            TourneyID = tourneyID;
            UserID = userID;
            Winner = winner;
            Type = type;
        }
    }
}
