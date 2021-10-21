using LAN_DTO;
using LAN_IDAL;
using LAN_ILOGIC.Containers;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Containers
{
    public class TeamContainer: ITeamContainer
    {
        readonly ITeamDAL _teamDAL;
        public TeamContainer(ITeamDAL teamDAL)
        {
            _teamDAL = teamDAL;
        }

        public TeamDTO GetTeam(int teamId)
        {
            return _teamDAL.GetTeam(teamId);
        }

        private TeamDTO SetPasswordsToNull(TeamDTO team)
        {

            foreach (UsersInTeamDTO usersInTeam in team.Players)
            {
                usersInTeam.User.Password = null;
            }
            return team;
        }
    }
}
