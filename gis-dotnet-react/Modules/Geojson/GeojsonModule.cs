using gis_dotnet_react.core;
using gis_dotnet_react.geojson.ports;
using gis_dotnet_react.geojson.adapters;
using Microsoft.AspNetCore.Mvc;

namespace gis_dotnet_react.geojson;

public class GeojsonModule: IModule
{
    public IServiceCollection RegisterModules(IServiceCollection services)
    {
        services.AddScoped<IGeojson, Geojson>();
        return services;
    }

    public IEndpointRouteBuilder MapEndpoints(IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGet("/geojson", async ([FromServices] IGeojson Geojson) => {
            return Geojson.getKey();
        });
        return endpoints;
    }
}
