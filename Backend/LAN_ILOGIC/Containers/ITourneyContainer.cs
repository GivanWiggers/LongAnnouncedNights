using LAN_DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_ILOGIC.Containers
{
    public interface ITourneyContainer
    {
        public List<TourneyDTO> GetTourneys(int userId);
        public TourneyDTO GetTourney(int tourneyId);
    }
}
