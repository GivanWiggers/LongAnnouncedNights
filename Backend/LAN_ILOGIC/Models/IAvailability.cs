using LAN_Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Models
{
    public interface IAvailability
    {
        public int AvailabilityID { get; }
        public int DateID { get; }
        public int UserID { get; }
        public AvailabilityEnum Available { get; set; }
    }
}
