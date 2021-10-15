using LAN_DTO;
using LAN_IDAL;
using LAN_ILOGIC.Containers;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Containers
{
    public class UserContainer: IUserContainer
    {
        readonly IUserDAL _userDAL;
        public UserContainer(IUserDAL userDAL)
        {
            _userDAL = userDAL;
        }

        public UserDTO GetUser(string email, string password)
        {
            return _userDAL.GetUser(email, password);
        }
    }
}
