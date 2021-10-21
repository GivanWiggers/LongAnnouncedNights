using LAN_DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_IDAL
{
    public interface ITeamDAL
    {
        public TeamDTO GetTeam(int teamId);
    }
}
