using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LAN_DTO
{
    [Table("user")]
    public class UserDTO
    {
        [Key]
        public int UserID { get;  set; }
        public string Name { get;  set; }
        public string Email { get;  set; }
        public string Password { get;  set; }
    }
}
