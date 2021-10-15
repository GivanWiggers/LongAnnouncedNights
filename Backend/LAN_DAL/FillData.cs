using System;
using System.Collections.Generic;
using System.Text;
using System.Transactions;
using LAN_DTO;
using LAN_Enums;
using LAN_IDAL;

namespace LAN_DAL
{
    public class FillData: IFillData
    {
        readonly LANContext _Context;
        public FillData(LANContext context)
        {
            _Context = context;
        }

        public void fillData()
        { 
            UserDTO user1 = new UserDTO
            {
                UserID = 1,
                Name = "User1",
                Email = "user1@gmail.com",
                Password = "123"
            };
            UserDTO user2 = new UserDTO
            {
                UserID = 2,
                Name = "User2",
                Email = "user2@gmail.com",
                Password = "123"
            };
            UserDTO user3 = new UserDTO
            {
                UserID = 3,
                Name = "User3",
                Email = "user3@gmail.com",
                Password = "123"
            };
            UserDTO user4 = new UserDTO
            {
                UserID = 4,
                Name = "User4",
                Email = "user4@gmail.com",
                Password = "123"
            };
            List<UserDTO> users = new List<UserDTO>()
            {
                user1,
                user2,
                user3,
                user4
            };
            UsersInTeamDTO user1InTeam1Tourney1 = new UsersInTeamDTO()
            {
                UserInTeamID = 1,
                TeamID = 1,
                User = user1
            };
        UsersInTeamDTO user2InTeam1Tourney1 = new UsersInTeamDTO()
        {
            UserInTeamID = 2,
            TeamID = 1,
                User = user2
            };
            UsersInTeamDTO user3InTeam2Tourney1 = new UsersInTeamDTO()
            {
                UserInTeamID = 3,
                TeamID =2,
                User = user3
            };
            UsersInTeamDTO user4InTeam2Tourney1 = new UsersInTeamDTO()
            {
                UserInTeamID = 4,
                TeamID=2,
                User = user4
            };

            TeamDTO team1 = new TeamDTO
            {
                TeamID = 1,
                Name = "Team1Tourney1",
                Players = new List<UsersInTeamDTO>()
                {
                    user1InTeam1Tourney1,
                    user2InTeam1Tourney1
                },
                TourneyID = 1
            };
            TeamDTO team2 = new TeamDTO
            {
                TeamID = 2,
                Name = "Team2Tourney1",
                Players = new List<UsersInTeamDTO>()
                {
                    user3InTeam2Tourney1,
                    user4InTeam2Tourney1
                },
               TourneyID =1
            };
            _Context.SaveChanges();
            TourneyDTO tourney1 = new TourneyDTO
            {
                TourneyID = 1,
                User = user1,
                Winner = team2,
                TypeOf = TourneyStyleEnum.FourSingle,
                Teams = new List<TeamDTO>()
                {
                    team1,
                    team2
                }
            };

            AvailabilityDTO availabilityUser1Date1 = new AvailabilityDTO
            {
                AvailabilityID = 1,
                Available = AvailabilityEnum.Available,
                User = user1
            };
            AvailabilityDTO availabilityUser2Date1 = new AvailabilityDTO
            {
                AvailabilityID = 2,
                Available = AvailabilityEnum.Available,
                User = user2
            };
            AvailabilityDTO availabilityUser3Date1 = new AvailabilityDTO
            {
                AvailabilityID = 3,
                Available = AvailabilityEnum.Available,
                User = user3
            };
            AvailabilityDTO availabilityUser4Date1 = new AvailabilityDTO
            {
                AvailabilityID = 4,
                Available = AvailabilityEnum.Available,
                User = user4
            };
            AvailabilityDTO availabilityUser1Date2 = new AvailabilityDTO
            {
                AvailabilityID = 5,
                Available = AvailabilityEnum.NotAvailable,
                User = user1
            };
            AvailabilityDTO availabilityUser2Date2 = new AvailabilityDTO
            {
                AvailabilityID = 6,
                Available = AvailabilityEnum.Maybe,
                User = user2
            };
            AvailabilityDTO availabilityUser3Date2 = new AvailabilityDTO
            {
                AvailabilityID = 7,
                Available = AvailabilityEnum.Available,
                User = user3
            };
            AvailabilityDTO availabilityUser4Date2 = new AvailabilityDTO
            {
                AvailabilityID = 8,
                Available = AvailabilityEnum.NotAvailable,
                User = user4
            };

            DateDTO date1Party1 = new DateDTO
            {
                DateID = 1,
                DateTime = new DateTime(2021, 10, 15, 19, 00, 00),
                UsersAvailable = new List<AvailabilityDTO>()
                {
                    availabilityUser1Date1,
                    availabilityUser2Date1,
                    availabilityUser3Date1,
                    availabilityUser4Date1
                }
            };

            DateDTO date2Party1 = new DateDTO
            {
                DateID = 2,
                DateTime = new DateTime(2021, 10, 16, 19, 00, 00),
                UsersAvailable = new List<AvailabilityDTO>()
                {
                    availabilityUser1Date2,
                    availabilityUser2Date2,
                    availabilityUser3Date2,
                    availabilityUser4Date2
                }
            };

            PartyDTO partyDTO = new PartyDTO
            {
                PartyID = 1,
                User = user1,
                Tourney = tourney1,
                Title = "First LAN Party",
                Game = "Rocket League",
                DateOfParty = date1Party1.DateTime,
                Dates = new List<DateDTO>()
                {
                    date1Party1,
                    date2Party1
                }
            };
            foreach(UserDTO user in users)
            {
                _Context.Users.Add(user);
            }
            //_Context.Users.Add(user1);
            //_Context.Users.Add(user2);
            //_Context.Users.Add(user3);
            //_Context.Users.Add(user4);
            _Context.SaveChanges();

            _Context.usersInTeams.Add(user1InTeam1Tourney1);
            _Context.usersInTeams.Add(user2InTeam1Tourney1);
            _Context.usersInTeams.Add(user3InTeam2Tourney1);
            _Context.usersInTeams.Add(user4InTeam2Tourney1);
            _Context.Teams.Add(team1);
            _Context.Teams.Add(team2);
            _Context.SaveChanges();

            _Context.Tourneys.Add(tourney1);
            _Context.SaveChanges();

            _Context.Parties.Add(partyDTO);
            _Context.SaveChanges();

        }
    }
}
