
using LAN_DAL;
using LAN_DTO;
using LAN_Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAN_Tests
{
    public class FillTestData
    {
        readonly LANContext _Context;

        public FillTestData(LANContext context)
        {
            _Context = context;
        }

        public void fillData()
        {
            _Context.Parties.RemoveRange(_Context.Parties);
            _Context.Teams.RemoveRange(_Context.Teams);
            _Context.Tourneys.RemoveRange(_Context.Tourneys);
            _Context.Users.RemoveRange(_Context.Users);
            _Context.usersInTeams.RemoveRange(_Context.usersInTeams);
            _Context.Dates.RemoveRange(_Context.Dates);
            _Context.Availabilities.RemoveRange(_Context.Availabilities);
            _Context.SaveChanges();
            UserDTO user1 = new UserDTO
            {
                UserID = 1,
                Name = "Test Name",
                Email = "test@test.com",
                Password = "123"
            };
            UsersInTeamDTO user1InTeam1Tourney1 = new UsersInTeamDTO()
            {
                UserInTeamID = 1,
                TeamID = 1,
                User = user1
            };
            TeamDTO team1 = new TeamDTO
            {
                TeamID = 1,
                Name = "Test Name",
                Players = new List<UsersInTeamDTO>()
                {
                    user1InTeam1Tourney1
                },
            };
            TourneyDTO tourney1 = new TourneyDTO
            {
                TourneyID = 1,
                User = user1,
                Winner = team1,
                TypeOf = TourneyStyleEnum.SixDouble,
                Teams = new List<TeamDTO>()
                {
                    team1
                }
            };
            AvailabilityDTO availabilityUser1Date1 = new AvailabilityDTO
            {
                AvailabilityID = 1,
                Available = AvailabilityEnum.Available,
                User = user1
            };
            DateDTO date1Party1 = new DateDTO
            {
                DateID = 1,
                DateTime = new DateTime(2021, 10, 15, 19, 00, 00),
                UsersAvailable = new List<AvailabilityDTO>()
                {
                    availabilityUser1Date1
                }
            };
            PartyDTO partyDTO = new PartyDTO
            {
                PartyID = 1,
                User = user1,
                Tourney = tourney1,
                Title = "Test Title",
                Game = "Test Game",
                DateOfParty = date1Party1.DateTime,
                Dates = new List<DateDTO>()
                {
                    date1Party1
                }
            };

            _Context.Teams.Add(team1);
            _Context.SaveChanges();

            _Context.Tourneys.Add(tourney1);
            _Context.SaveChanges();

            _Context.Parties.Add(partyDTO);
            _Context.SaveChanges();




            //_Context.Users.Add(user1);
            //_Context.SaveChanges();

            //PartyDTO p = new() { PartyID = 1, Dates = new List<DateDTO>(), DateOfParty = new DateTime(), User = new UserDTO(), Game = "Test Game", Title = "Test Title", Tourney= new TourneyDTO() };
            //PartyDTO p_withUser = new() { PartyID = 2, Dates = new List<DateDTO>(), DateOfParty = new DateTime(), User = u, Game = "Test Game with User", Title = "Test Title with User", Tourney= new TourneyDTO() };
            //_Context.Parties.AddRange(p, p_withUser);
            //_Context.SaveChanges();

            //TeamDTO t = new() { TeamID = 1, Name = "Test Name", Players = new List<UsersInTeamDTO>() };
            //_Context.Teams.Add(t);
            //_Context.SaveChanges();

            //UsersInTeamDTO uT = new() { UserInTeamID = 1, User = new UserDTO(), TeamID = 1 };
            //_Context.usersInTeams.Add(uT);
            //_Context.SaveChanges();

            //DateDTO d = new() { DateID = 1, DateTime = new DateTime(), UsersAvailable = new List<AvailabilityDTO>() };
            //_Context.Dates.Add(d);
            //_Context.SaveChanges();

            //TourneyDTO to = new() { TourneyID = 1, Teams = new List<TeamDTO>(), TypeOf = TourneyStyleEnum.EightSingle, User = new UserDTO(), Winner = new TeamDTO() };
            //_Context.Tourneys.Add(to);
            //_Context.SaveChanges();

            //AvailabilityDTO a = new() { AvailabilityID = 1, User = new UserDTO(), Available = AvailabilityEnum.Available };
            //_Context.Availabilities.Add(a);
            //_Context.SaveChanges();
        }
        
    }
}
