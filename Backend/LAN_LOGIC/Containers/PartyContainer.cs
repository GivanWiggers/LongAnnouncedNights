using LAN_DTO;
using LAN_IDAL;
using LAN_ILOGIC.Containers;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Containers
{
    public class PartyContainer: IPartyContainer
    {
        readonly IPartyDAL _partyDAL;
        public PartyContainer(IPartyDAL partyDAL)
        {
            _partyDAL = partyDAL;
        }

        public PartyDTO GetParty(int id)
        {
            return _partyDAL.GetParty(id);
        }
    }
}
