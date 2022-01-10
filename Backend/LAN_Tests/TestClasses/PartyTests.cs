using LAN_DTO;
using LAN_IDAL;
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
    public class PartyTests
    : IClassFixture<CustomWebApplicationFactory<TestStartup>>
    {
        private readonly WebApplicationFactory<TestStartup> _factory;

        public PartyTests(CustomWebApplicationFactory<TestStartup> factory)
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
        [InlineData(new object[] { "/party/readall?user_id=1", 1 })]
        public async Task ReadAllParties_User1(string url, int expected)
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(url);
            var test = JsonConvert.DeserializeObject<PartyDTO[]>(await response.Content.ReadAsStringAsync());

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal(expected, test.Length);
            Assert.Equal("application/json; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        //READ(id)
        [Theory]
        [InlineData(new object[] { "/party/read?party_id=1", "Test Title", "Test Game" })]
        public async Task Read_Party_by_Id_Check_on_Title_And_Game(string url, string expectedTitle, string expectedGame)
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(url);
            var party = JsonConvert.DeserializeObject<PartyDTO>(await response.Content.ReadAsStringAsync());

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("application/json; charset=utf-8", response.Content.Headers.ContentType.ToString());
            Assert.Equal(expectedTitle, party.Title);
            Assert.Equal(expectedGame, party.Game);

        }

        //post
        //put

    }
}
