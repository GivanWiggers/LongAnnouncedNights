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
    [Route("team")]
    public class TeamController : Controller
    {
        readonly ITeamContainer _teamContainer;
        public TeamController(ITeamContainer teamContainer)
        {
            _teamContainer = teamContainer;
        }

        [Route("read"), HttpGet]
        public IActionResult Read(int teamId)
        {
            TeamDTO team = _teamContainer.GetTeam(teamId);

            return Ok(team);
        }
    }
}
