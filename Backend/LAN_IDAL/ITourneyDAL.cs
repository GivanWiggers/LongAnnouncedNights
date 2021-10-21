using LAN_DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_IDAL
{
    public interface ITourneyDAL
    {
        public List<TourneyDTO> GetTourneys(int userId);
        public TourneyDTO GetTourney(int tourneyId);
    }
}
