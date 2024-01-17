using Microsoft.AspNetCore.Mvc;

namespace ArabicTransliteratorApi;

[Route("[controller]")]
[ApiController]
public class TransliteratorController : ControllerBase
{

    [HttpGet]
    [Route("/")]
    public string Index() {
        return "Hello world";
    }

}
