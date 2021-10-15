using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LAN_DTO
{
    [Table("date")]
    public class DateDTO
    {
        [Key]
        public int DateID { get;  set; }
        //[ForeignKey("PartyID")]
        //public PartyDTO Party { get;  set; }
        public DateTime DateTime { get;  set; }
        [ForeignKey("DateID")]
        public List<AvailabilityDTO> UsersAvailable { get; set; }
    }
}
