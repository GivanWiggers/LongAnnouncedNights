using LAN_DTO;
using LAN_IDAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LAN_DAL
{
    public class UserDAL: IUserDAL
    {
        readonly LANContext _Context;
        public UserDAL(LANContext context)
        {
            _Context = context;
        }

        public UserDTO GetUser(string email, string password)
        {
            return _Context.Users
                .Where(u => u.Email == email && u.Password == password)

                //.Except(u => u.Password)
                .FirstOrDefault();
        }

        //public UserDTO GetUser(string email, string password)
        //{
        //    var user = _Context.Users
        //        .Where(u => u.Email == email && u.Password == password)

        //        .FirstOrDefault();
        //   // UserDTO userDTO = new UserDTO(user.UserID, user.Name, user.Email);
        //    return userDTO;
        //}
    }
}
