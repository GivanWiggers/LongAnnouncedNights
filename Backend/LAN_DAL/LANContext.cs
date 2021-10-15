using LAN_DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace LAN_DAL
{
    public class LANContext : DbContext
    {
        public LANContext(DbContextOptions<LANContext> options) : base(options) { }

        public DbSet<AvailabilityDTO> Availabilities { get; set; }
        public DbSet<DateDTO> Dates { get; set; }
        public DbSet<PartyDTO> Parties{ get; set; }
        public DbSet<TeamDTO> Teams{ get; set; }
        public DbSet<TourneyDTO> Tourneys { get; set; }
        public DbSet<UserDTO> Users { get; set; }
        public DbSet<UsersInTeamDTO> usersInTeams { get; set; }
    }
}
