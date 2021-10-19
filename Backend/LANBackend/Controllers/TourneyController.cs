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
    [Route("tourney")]
    public class TourneyController : Controller
    {
        readonly ITourneyContainer _tourneyContainer;
        public TourneyController(ITourneyContainer tourneyContainer)
        {
            _tourneyContainer = tourneyContainer;
        }

        [Route("read"), HttpGet]
        public IActionResult Read(int userId)
        {
            List<TourneyDTO> tourney = _tourneyContainer.GetTourneys(userId);

            return Ok(tourney);
        }
    }
}
