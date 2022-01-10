using LAN_DTO;
using LANBackend;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace LAN_Tests.TestClasses
{
    public class TourneyTests
    : IClassFixture<CustomWebApplicationFactory<TestStartup>>
    {
        private readonly WebApplicationFactory<TestStartup> _factory;

        public TourneyTests(CustomWebApplicationFactory<TestStartup> factory)
        {
            _factory = factory.WithWebHostBuilder(builder =>
            {
                builder.UseSolutionRelativeContentRoot("LANBackend");

                builder.ConfigureTestServices(services =>
                {
                    services.AddMvc().AddApplicationPart(typeof(Startup).Assembly);
                });

            });
        }


        //READALL from user 1
        [Theory]
        [InlineData(new object[] { "/tourney/readallfromuser?userId=1", 1 })]
        public async Task ReadAllTourneys_User1(string url, int expected)
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(url);
            var tourney = JsonConvert.DeserializeObject<TourneyDTO[]>(await response.Content.ReadAsStringAsync());
            //System.Diagnostics.Debugger.Break();

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal(expected, tourney.Length);
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        //READ(id)
        [Theory]
        [InlineData(new object[] { "/tourney/read?tourneyId=1", 1 })]
        public async Task Read_Tourney_by_Id_Check_on_Title_And_Game(string url, int amountOfTeams)
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(url);
            var tourney = JsonConvert.DeserializeObject<TourneyDTO>(await response.Content.ReadAsStringAsync());

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("application/json; charset=utf-8", response.Content.Headers.ContentType.ToString());
            Assert.Equal(LAN_Enums.TourneyStyleEnum.SixDouble, tourney.TypeOf);
            Assert.Equal(amountOfTeams, tourney.Teams.Count());

        }

        //post
        //put

    }
}
