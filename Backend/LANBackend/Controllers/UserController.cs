using LAN_DTO;
using LAN_ILOGIC.Containers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LANBackend.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : Controller
    {
        readonly IUserContainer _userContainer;
        public UserController(IUserContainer userContainer)
        {
            _userContainer = userContainer;
        }

        [Route("read"), HttpGet]
        public IActionResult Read(string email, string password)
        {
            UserDTO user = _userContainer.GetUser(email, password);

            return Ok(user);
        }
    }
}
