using gis_dotnet_react.core;
using gis_dotnet_react.mapbox.ports;
using gis_dotnet_react.mapbox.adapters;
using Microsoft.AspNetCore.Mvc;

namespace gis_dotnet_react.mapbox;

public class MapboxModule: IModule
{
    public IServiceCollection RegisterModules(IServiceCollection services)
    {
        services.AddScoped<IMapboxKey, MapboxKey>();
        return services;
    }

    public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGet("/mapbox/key", async ([FromServices] IMapboxKey MapboxKey) => {
            return MapboxKey.getKey();
        });
        return endpoints;
    }
}
