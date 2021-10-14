using LAN_Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Models
{
    public interface ITourney
    {
        public int TourneyID { get; }
        public int UserID { get; }
        public ITeam Winner { get; }
        public TourneyStyleEnum TypeOf { get; }
        public List<ITeam> Teams { get; set; }
    }
}
