using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LAN_DTO
{
    [Table("team")]
    public class TeamDTO
    {
        [Key]
        public int TeamID { get; set; }
        //[ForeignKey("TourneyID")]
        //public TourneyDTO Tourney { get; set; }
        public string Name { get; set; }
        [ForeignKey("TeamID")]
        public List<UsersInTeamDTO> Players { get; set; }
    }
}
