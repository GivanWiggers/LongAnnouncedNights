using LAN_ILOGIC.Containers;
using LAN_ILOGIC.Models;
using LAN_LOGIC.Containers;
using LAN_LOGIC.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LANBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IAvailability, Availability>();
            services.AddScoped<IAvailabilityContainer, AvailabilityContainer>();
            services.AddScoped<IDate, Date>();
            services.AddScoped<IDateContainer, DateContainer>();
            services.AddScoped<IParty, Party>();
            services.AddScoped<IPartyContainer, PartyContainer>();
            services.AddScoped<ITeam, Team>();
            services.AddScoped<ITeamContainer, TeamContainer>();
            services.AddScoped<ITourney, Tourney>();
            services.AddScoped<ITourneyContainer, TourneyContainer>();
            services.AddScoped<IUser, User>();
            services.AddScoped<IUserContainer, UserContainer>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "LANBackend", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "LANBackend v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
