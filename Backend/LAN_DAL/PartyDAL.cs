using LAN_DTO;
using LAN_IDAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LAN_DAL
{
    public class PartyDAL: IPartyDAL
    {
        readonly LANContext _Context;
        public PartyDAL(LANContext context)
        {
            _Context = context;
        }

        public PartyDTO GetParty(int id)
        {
            return _Context.Parties
                .Where(p => p.PartyID == id)
                .Include(p => p.Tourney)
                    .ThenInclude(t => t.Teams)
                        .ThenInclude(p => p.Players)
                            .ThenInclude(p => p.User)
                .Include(p => p.Tourney)
                    .ThenInclude(t => t.Winner)
                        .ThenInclude(w => w.Players)
                            .ThenInclude(p => p.User)
                .Include(p => p.Tourney)
                    .ThenInclude(t => t.User)
                .Include(p => p.User)
                .Include(p => p.Dates)
                    .ThenInclude(d => d.UsersAvailable)
                        .ThenInclude(a => a.User)
                    .AsNoTracking()
                .FirstOrDefault();
        }

        public List<PartyDTO> GetAllPartiesUser(int userId)
        {
            List<PartyDTO> parties = new List<PartyDTO>();

            //List<PartyDTO> partiesHosted =
            //    _Context.Parties
            //        .Where(p => p.User.UserID == userId).ToList();

            List<PartyDTO> partiesParticipated = new List<PartyDTO>();

            //list of where the user is in a Team
            List<UsersInTeamDTO> teamsParticipated =
                _Context.usersInTeams
                    .Where(p => p.User.UserID == userId)
                        .ToList();

            //Id van teams
            List<int> teamIDsParticipated = new List<int>();
            foreach (UsersInTeamDTO t in teamsParticipated)
            {
                teamIDsParticipated.Add(t.TeamID);
            }

            //Parties from teamID's
            foreach(int teamID in teamIDsParticipated)
            {
                partiesParticipated.Add(
                    _Context.Parties
                    .Include(p => p.Tourney)
                        .ThenInclude(t => t.Winner)
                    .Include(p => p.Tourney)
                        .ThenInclude(t => t.Teams)
                            .ThenInclude(p => p.Players)
                                .ThenInclude(p => p.User)
                    .Where(t => t.Tourney.Teams.Any(x => x.TeamID == teamID))
                        .FirstOrDefault());
            }
            return partiesParticipated;
        }

        public void AddParty(PartyDTO party)
        {
            _Context.Parties.Add(party);
            _Context.SaveChanges();
        }

        public void UpdateParty(PartyDTO party)
        {
            _Context.Parties.Update(party);
            _Context.SaveChanges();
        }

    }
}
