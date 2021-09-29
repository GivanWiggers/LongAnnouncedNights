using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Models
{
    public interface IDate
    {
        public int DateID { get; }
        public int PartyID { get; }
        public DateTime DateOfDate { get; }
        public List<IAvailability> UsersAvailable { get; }
    }
}
