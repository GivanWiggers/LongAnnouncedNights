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
            PartyDTO component = _partyContainer.GetParty(party_id);

            return Ok(component);
        }
    }
}
