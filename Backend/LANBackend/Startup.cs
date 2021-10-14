using LAN_DAL;
using LAN_IDAL;
using LAN_ILOGIC.Containers;
using LAN_ILOGIC.Models;
using LAN_LOGIC.Containers;
using LAN_LOGIC.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            services.AddDbContext<LANContext>(options => options.UseMySQL("server=localhost;port=3308;user=root;password=root;database=db"));

            services.AddScoped<IAvailabilityContainer, AvailabilityContainer>();
            services.AddScoped<IDateContainer, DateContainer>();
            services.AddScoped<IPartyContainer, PartyContainer>();
            services.AddScoped<ITeamContainer, TeamContainer>();
            services.AddScoped<ITourneyContainer, TourneyContainer>();
            services.AddScoped<IUserContainer, UserContainer>();

            services.AddScoped<IPartyDAL, PartyDAL>();
            
            //services.AddScoped<IAvailability, Availability>();
            //services.AddScoped<IDate, Date>();
            //services.AddScoped<IParty, Party>();
            //services.AddScoped<ITeam, Team>();
            //services.AddScoped<ITourney, Tourney>();
            //services.AddScoped<IUser, User>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "LANBackend", Version = "v1" });
            });

            services.AddControllersWithViews()
               .AddNewtonsoftJson(opt =>
               opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
           );
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
