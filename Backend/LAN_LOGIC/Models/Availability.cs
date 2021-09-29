using LAN_Enums;
using LAN_ILOGIC.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Models
{
    public class Availability: IAvailability
    {
        public int AvailabilityID { get; private set; }
        public int DateID { get; private set; }
        public int UserID { get; private set; }
        public AvailabilityEnum Available { get; set; }

        public Availability( int availabilityID, int dateID, int userID, AvailabilityEnum available)
        {
            AvailabilityID = availabilityID;
            DateID = dateID;
            UserID = userID;
            Available = available;
        }
    }
}
