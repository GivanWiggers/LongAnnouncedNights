using LAN_DTO;
using LAN_IDAL;
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
                .ToList();
        }
    }
}
