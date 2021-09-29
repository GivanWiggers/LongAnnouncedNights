using LAN_ILOGIC.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Models
{
    public class Date: IDate
    {
        public int DateID { get; private set; }
        public int PartyID { get; private set; }
        public DateTime DateOfDate { get; private set; }
        public List<IAvailability> UsersAvailable { get; set; }

        public Date(int dateID, int partyID, DateTime dateOfDate)
        {
            DateID = dateID;
            PartyID = partyID;
            DateOfDate = dateOfDate;
        }
    }
}
