using LAN_DTO;
using LAN_IDAL;
using LAN_ILOGIC.Containers;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_LOGIC.Containers
{
    public class TourneyContainer: ITourneyContainer
    { 
        readonly ITourneyDAL _tourneyDAL;
        public TourneyContainer(ITourneyDAL tourneyDAL)
    {
        _tourneyDAL = tourneyDAL;
    }

    public List<TourneyDTO> GetTourneys(int userId)
        {
            return _tourneyDAL.GetTourneys(userId);
        }
    }
}
