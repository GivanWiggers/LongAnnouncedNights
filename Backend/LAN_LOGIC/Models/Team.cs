using LAN_ILOGIC.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Models
{
    public class Team: ITeam
    {
        public int TeamID { get; private set; }
        public int TourneyID { get; private set; }
        public string Name { get; private set; }
        public List<IUser> Players { get; set; }

        public Team(int teamID, int tourneyID, string name)
        {
            TeamID = teamID;
            TourneyID = tourneyID;
            Name = name;
        }
    }
}
