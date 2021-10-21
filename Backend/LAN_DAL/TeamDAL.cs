using LAN_DTO;
using LAN_IDAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LAN_DAL
{
    public class TeamDAL: ITeamDAL
    {
        readonly LANContext _Context;
        public TeamDAL(LANContext context)
        {
            _Context = context;
        }

        public TeamDTO GetTeam(int teamId)
        {
            return _Context.Teams
                .Where(t => t.TeamID == teamId)
                    .Include(t => t.Players)
                    .ThenInclude(p => p.User)
                .AsNoTracking()
                .FirstOrDefault();
        }
    }
}
