using LAN_DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Containers
{
    public interface IUserContainer
    {
        public UserDTO GetUser(string email, string password);
    }
}
