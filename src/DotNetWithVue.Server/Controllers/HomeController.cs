using Microsoft.AspNetCore.Mvc;

namespace DotNetWithVue.Server.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class HomeController : ControllerBase
	{
		readonly ILogger<HomeController> logger;

		public HomeController(ILogger<HomeController> logger)
		{
			this.logger = logger;
		}

		[HttpGet]
		public DateTime Get()
		{
			return DateTime.Now;
		}
	}
}