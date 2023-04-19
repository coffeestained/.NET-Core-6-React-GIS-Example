using Microsoft.AspNetCore.Mvc;
using gis_dotnet_react.Configurations;

namespace gis_dotnet_react.Controllers;

[ApiController]
[Route("[controller]")]
public class MapboxController : ControllerBase
{
    private readonly ILogger<MapboxController> _logger;

    private readonly IConfiguration Configuration;

    private readonly string mapBoxApiKey;

    public MapboxController(ILogger<MapboxController> logger, IConfiguration configuration)
    {
        _logger = logger;
        // Eventually I'd like to server the GIS layers directly from the API
        // For brevity, a simple secret store and allowing the react app to handle it
        // is ideal.
        Configuration = configuration;
        mapBoxApiKey = Configuration["Mapbox:ServiceApiKey"];
    }

    [HttpGet]
    public IActionResult Get()
    {
        using (HttpClient client = new HttpClient())
        {
            try
            {
                // TODO
                // Perhaps we should serve the map, layers, etc, from the api if I get time.
                Console.WriteLine("Serving API Key");
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
            }
        }
        return Ok(mapBoxApiKey);
    }
}
