using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LAN_DTO
{
    [Table("userInTeam")]
    public class UsersInTeamDTO
    {
        
        [Key]
        public int UserInTeamID { get; set; }
        [ForeignKey("TeamID")]
        public int TeamID { get; set; }
        [ForeignKey("UserID")]
        public UserDTO User { get; set; }
    }
}
