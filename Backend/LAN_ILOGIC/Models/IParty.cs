using LAN_Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Models
{
    public interface IParty
    {
        public int PartyID { get; }
        public int UserID { get; }
        public int TourneyID { get; }
        public string Title { get; }
        public string Game { get; }
        public TourneyStyleEnum Tourneystyle { get; }
        public DateTime DateOfParty { get; }
        public List<IDate> Dates { get; }
    }
}
