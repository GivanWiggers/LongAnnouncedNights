using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Models
{
    public interface IUser
    {
        public int UserID { get; }
        public string Name { get; }
        public string Email { get; }
        public string Password { get; }
    }
}
