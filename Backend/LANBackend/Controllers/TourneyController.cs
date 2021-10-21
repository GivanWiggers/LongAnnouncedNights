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

        [Route("readAllFromUser"), HttpGet]
        public IActionResult ReadAllFromUser(int userId)
        {
            List<TourneyDTO> tourney = _tourneyContainer.GetTourneys(userId);

            return Ok(tourney);
        }

        [Route("read"), HttpGet]
        public IActionResult Read(int tourneyId)
        {
            TourneyDTO tourney = _tourneyContainer.GetTourney(tourneyId);

            return Ok(tourney);
        }
    }
}
