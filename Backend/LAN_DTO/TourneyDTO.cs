using LAN_Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LAN_DTO
{
    [Table("tourney")]
    public class TourneyDTO
    {
        [Key]
        public int TourneyID { get;  set; }

        [ForeignKey("UserID")]
        public UserDTO User { get;  set; }

        [ForeignKey("WinnerID")]
        public TeamDTO Winner{  get;  set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public TourneyStyleEnum TypeOf { get;  set; }

        [ForeignKey("TourneyID")]
        public List<TeamDTO> Teams { get; set; }
    }
}
