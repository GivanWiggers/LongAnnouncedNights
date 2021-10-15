using LAN_Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LAN_DTO
{
    [Table("party")]
    public class PartyDTO
    {
        [Key]
        public int PartyID { get; set; }
        [ForeignKey("UserID")]
        public UserDTO User { get; set; }
        [ForeignKey("TourneyID")]
        public TourneyDTO Tourney { get; set; }
        public string Title { get; set; }
        public string Game { get; set; }
        //[ForeignKey("PartyID")]
        public DateTime DateOfParty { get; set; }  
        [ForeignKey("PartyID")]
        public List<DateDTO> Dates { get; set; }
    }
}
