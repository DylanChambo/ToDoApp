using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ToDoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        [HttpGet]

        public async Task<ActionResult<List<Task>>> GetTasks()
        {
            return new List<Task>
            { new Task
                {
                    Info = "Complete this app",
                    Date = DateTime.Now,
                    Completed = false,
                    Priority = "Medium"
                }
            };
        }
    }
}
