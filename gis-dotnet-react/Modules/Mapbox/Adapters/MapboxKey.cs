using System.Text;
using System;
using gis_dotnet_react.mapbox.ports;
using Microsoft.AspNetCore.Mvc;

namespace gis_dotnet_react.mapbox.adapters;

class MapboxKey : IMapboxKey
{
    private readonly ILogger<MapboxKey> _logger;

    private readonly IConfiguration Configuration;

    public MapboxKey (ILogger<MapboxKey> logger, IConfiguration configuration)
    {
        _logger = logger;
        Configuration = configuration;
    }

    public String getKey()
    {
        using (HttpClient client = new HttpClient())
        {
            try
            {
                // TODO
                // Perhaps we should serve the map, layers, etc, from the api if I get time.
                Console.WriteLine("Serving API Key");
                var ServiceKey = Configuration["Mapbox:ServiceApiKey"];
                return ServiceKey;
            }
            catch (HttpRequestException e)
            {
                var Err = String.Format("Message :{0} ", e.Message);
                Console.WriteLine(Err);
                return Err;
            }
        }

    }
}
