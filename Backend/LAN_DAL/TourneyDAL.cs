using LAN_DTO;
using LAN_IDAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LAN_DAL
{
    public class TourneyDAL: ITourneyDAL
    {
        readonly LANContext _Context;
        public TourneyDAL(LANContext context)
        {
            _Context = context;
        }

        public List<TourneyDTO> GetTourneys(int userId)
        {
            return _Context.Tourneys
                .Include(t => t.User)
                .Include(t => t.Winner)
                .ThenInclude(p => p.Players)
                            .ThenInclude(p => p.User)
                .Include(t => t.Teams)
                .ThenInclude(p => p.Players)
                            .ThenInclude(p => p.User)
                .ToList();
        }

        public TourneyDTO GetTourney(int tourneyId)
        {
            return _Context.Tourneys
                .Where(t => t.TourneyID == tourneyId)
                .Include(t => t.User)
                .Include(t => t.Winner)
                .ThenInclude(p => p.Players)
                            .ThenInclude(p => p.User)
                .Include(t => t.Teams)
                .ThenInclude(p => p.Players)
                            .ThenInclude(p => p.User)

                .AsNoTracking()
                .FirstOrDefault();
        }
    }
}
