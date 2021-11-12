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
    [Route("party")]
    public class PartyController: Controller
    {
        readonly IPartyContainer _partyContainer;
        public PartyController(IPartyContainer partyContainer)
        {
            _partyContainer = partyContainer;
        }

        [Route("read"), HttpGet]
        public IActionResult Read(int party_id)
        {
            PartyDTO party = _partyContainer.GetParty(party_id);

            return Ok(party);
        }

        [Route("readall"), HttpGet]
        public IActionResult ReadAll(int user_id)
        {
            List<PartyDTO> parties = _partyContainer.GetAllPartiesUser(user_id);

            return Ok(parties);
        }


        [HttpPost]
        public IActionResult AddParty(PartyDTO party)
        {
            PartyDTO p = new PartyDTO() {PartyID = party.PartyID, User = party.User, Tourney = party.Tourney, Title = party.Title, Game = party.Game, DateOfParty = new DateTime(0,0,0), Dates = party.Dates};

            _partyContainer.AddParty(p);

            return Ok(p);
        }

        [HttpPut]
        public IActionResult UpdateParty(PartyDTO party)
        {
            PartyDTO p = new PartyDTO() { PartyID = party.PartyID, User = party.User, Tourney = party.Tourney, Title = party.Title, Game = party.Game, DateOfParty = new DateTime(0,0,0), Dates = party.Dates };

            _partyContainer.UpdateParty(p);

            return Ok(p);
        }

    }
}
