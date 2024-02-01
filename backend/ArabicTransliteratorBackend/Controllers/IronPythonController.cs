namespace ArabicTransliteratorBackend;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class IronPythonController : ControllerBase
{
    private readonly IronPythonService _ironPythonService;

    public IronPythonController(IronPythonService ironPythonService)
    {
        _ironPythonService = ironPythonService;
    }

    [HttpGet]
    public IActionResult ExecutePythonScript()
    {
        _ironPythonService.ExecutePythonScript();
        return Ok("Python script executed successfully!");
    }
}
