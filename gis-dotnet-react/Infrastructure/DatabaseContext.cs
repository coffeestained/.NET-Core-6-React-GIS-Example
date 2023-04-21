using System;
using System.Data;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace gis_dotnet_react.database;
public class DatabaseContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public DatabaseContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
    }

    //public DbSet<User> Users { get; set; }
}
