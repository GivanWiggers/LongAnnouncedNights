using LAN_DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Containers
{
    public interface IPartyContainer
    {
        public PartyDTO GetParty(int id);
        public List<PartyDTO> GetAllPartiesUser(int userId);
        public void AddParty(PartyDTO party);
        public void UpdateParty(PartyDTO party);
    }
}
