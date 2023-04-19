using Microsoft.AspNetCore.Mvc;

namespace gis_dotnet_react.Controllers;

[ApiController]
[Route("[controller]")]
public class MapboxController : ControllerBase
{
    private readonly ILogger<MapboxController> _logger;
    private readonly string mapBoxApiURL;
    private readonly string mapBoxApiKey;

    public MapboxController(ILogger<MapboxController> logger)
    {
        _logger = logger;
        mapBoxApiURL = "https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-73.572,40.8127,8.05,0/600x400";
    }

    [HttpGet]
    public IActionResult Get()
    {
        using (HttpClient client = new HttpClient())
        {
            try
            {
                // Get Map
                HttpResponseMessage response =  client.GetAsync(mapBoxApiURL).Result;

                response.EnsureSuccessStatusCode();

                // ToString()
                string responseBody = response.Content.ReadAsStringAsync().Result;
                Console.WriteLine(responseBody);

            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
            }
        }
        return Ok("atsakas");
    }
}
