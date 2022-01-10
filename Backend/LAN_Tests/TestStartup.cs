using System;
using System.Linq;
using LAN_DAL;
using LAN_IDAL;
using LAN_ILOGIC.Containers;
using LAN_LOGIC.Containers;
using LANBackend;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace LAN_Tests
{
    public class TestStartup : Startup
    {
        public TestStartup(IConfiguration configuration) : base(configuration)
        {
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<LANContext>();
            services.AddDbContext<LANContext>(opt => opt.UseInMemoryDatabase("db"));

            services.AddScoped<IAvailabilityContainer, AvailabilityContainer>();
            services.AddScoped<IDateContainer, DateContainer>();
            services.AddScoped<IPartyContainer, PartyContainer>();
            services.AddScoped<ITeamContainer, TeamContainer>();
            services.AddScoped<ITourneyContainer, TourneyContainer>();
            services.AddScoped<IUserContainer, UserContainer>();
            services.AddScoped<ITourneyContainer, TourneyContainer>();

            services.AddScoped<IPartyDAL, PartyDAL>();
            services.AddScoped<IUserDAL, UserDAL>();
            services.AddScoped<ITourneyDAL, TourneyDAL>();
            services.AddScoped<ITeamDAL, TeamDAL>();
            services.AddScoped<IFillData, FillData>();

            services.AddControllers();

            services.AddControllersWithViews()
                .AddNewtonsoftJson(opt =>
                opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );

            services.AddMvc();
        }


        public override void Configure(IApplicationBuilder app, IWebHostEnvironment env,IFillData f, LANContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Backend v1"));
            }

            app.UseRouting();

            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin()
                .SetIsOriginAllowed(origin => true)
             );

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            try
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                context.Parties.RemoveRange(context.Parties);
                context.Teams.RemoveRange(context.Teams);
                context.SaveChanges();
                context.Tourneys.RemoveRange(context.Tourneys);
                context.Users.RemoveRange(context.Users);
                context.SaveChanges();
                context.usersInTeams.RemoveRange(context.usersInTeams);
                context.Dates.RemoveRange(context.Dates);
                context.Availabilities.RemoveRange(context.Availabilities);
                context.SaveChanges();
                FillTestData fillTestData = new(context);
                fillTestData.fillData();

            }
            catch (Exception ex)
            {
            }
        }


    }
}
