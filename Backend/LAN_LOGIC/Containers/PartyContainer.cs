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

        private PartyDTO SetPasswordsToNull(PartyDTO party)
        {
            party.User.Password = null;
            party.Tourney.User.Password = null;
            foreach (UsersInTeamDTO userInTeam in party.Tourney.Winner.Players)
            {
                userInTeam.User.Password = null;
            }
            foreach (TeamDTO team in party.Tourney.Teams)
            {
                foreach (UsersInTeamDTO usersInTeam in team.Players)
                {
                    usersInTeam.User.Password = null;
                }
            }

            foreach (DateDTO date in party.Dates)
            {
                foreach (AvailabilityDTO availability in date.UsersAvailable)
                {
                    availability.User.Password = null;
                }
            }
            return party;
        }
    }
}
