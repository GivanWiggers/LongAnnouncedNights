using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Models
{
    public interface ITeam
    {
        public int TeamID { get; }
        public int TourneyID { get; }
        public string Name { get; }
        public List<IUser> Players { get; }
    }
}
