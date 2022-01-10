using LAN_DTO;
using System;
using System.Collections.Generic;

namespace LAN_IDAL
{
    public interface IPartyDAL
    {
        public PartyDTO GetParty(int id);
        public List<PartyDTO> GetAllPartiesUser(int userId);
        public void AddParty(PartyDTO party);
        public void UpdateParty(PartyDTO party);

    }
}
