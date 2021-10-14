using LAN_ILOGIC.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LAN_LOGIC.Models
{
    [Table("Users")]
    public class User: IUser
    {
        public int UserID { get; private set;}
        public string Name { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }

        public User(int userID, string name, string email, string password)
        {
            UserID = userID;
            Name = name;
            Email = email;
            Password = password;
        }
    }
}
