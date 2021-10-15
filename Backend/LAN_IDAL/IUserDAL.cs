using LAN_DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_IDAL
{
    public interface IUserDAL
    {
        public UserDTO GetUser(string email, string password);
    }
}
