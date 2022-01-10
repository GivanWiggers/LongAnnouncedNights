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
            PartyDTO party = _partyDAL.GetParty(id);
            if(party != null)
            {
                party = SetPasswordsToNull(party);
            }
            return party;
        }

        public List<PartyDTO> GetAllPartiesUser(int userId)
        {
            List<PartyDTO> parties = new List<PartyDTO>();
            List<PartyDTO> partiesWithPassword = _partyDAL.GetAllPartiesUser(userId);

            if (partiesWithPassword != null)
            {
                foreach(PartyDTO p in partiesWithPassword)
                {
                    parties.Add(SetPasswordsToNull(p));
                }
            }

            return parties;
        }

        public void AddParty(PartyDTO party)
        {
            _partyDAL.AddParty(party);
        }

        public void UpdateParty(PartyDTO party)
        {
            _partyDAL.UpdateParty(party);
        }


        private PartyDTO SetPasswordsToNull(PartyDTO party)
        {
            if(party.User != null)
            {
                party.User.Password = null;
            }
            if(party.Tourney.User != null)
            {
                party.Tourney.User.Password = null;
            }
            if(party.Tourney.Winner != null)
            {
                foreach (UsersInTeamDTO userInTeam in party.Tourney.Winner.Players)
                {
                    userInTeam.User.Password = null;
                }
            }
            if(party.Tourney.Teams != null)
            {
                foreach (TeamDTO team in party.Tourney.Teams)
                {
                    foreach (UsersInTeamDTO usersInTeam in team.Players)
                    {
                        usersInTeam.User.Password = null;
                    }
                }
            }
            if(party.Dates != null)
            {
                foreach (DateDTO date in party.Dates)
                {
                    foreach (AvailabilityDTO availability in date.UsersAvailable)
                    {
                        availability.User.Password = null;
                    }
                }
            }
            return party;
        }

    }
}
