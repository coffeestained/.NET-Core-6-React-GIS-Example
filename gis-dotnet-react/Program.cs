using gis_dotnet_react.core;

var builder = WebApplication.CreateBuilder(args);
builder.Services.RegisterModules();
builder.Services.AddControllersWithViews();

var startup = new Startup(builder.Configuration);
startup.ConfigureServices(builder.Services);

var app = builder.Build();
app.MapEndpoints();
startup.Configure(app, builder.Environment);
