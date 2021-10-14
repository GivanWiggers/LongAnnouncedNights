using LAN_DTO;
using LAN_IDAL;
using Microsoft.EntityFrameworkCore;
using System;
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
                //.Include(p => p.Tourney)
                //    .ThenInclude(t => t.Teams)
                //        .ThenInclude(p => p.Players)
                //            .ThenInclude(p => p.User)
                //.Include(p => p.Tourney)
                //    .ThenInclude(t => t.WinningTeam)
                //        .ThenInclude(w => w.Players)
                //            .ThenInclude(p => p.User)
                .Include(p => p.User)
                .Include(p => p.Dates)
                    .ThenInclude(d => d.UsersAvailable)
                        .ThenInclude(a => a.User)
                    .AsNoTracking()
                .FirstOrDefault();
        }
    }
}
