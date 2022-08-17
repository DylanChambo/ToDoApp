using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoAPI.Data;

namespace ToDoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {

        private readonly DataContext _context;
        public TaskController(DataContext context)
        {
            _context = context;
        }

        // Get Request to get tasks
        [HttpGet]
        public async Task<ActionResult<List<Task>>> GetTasks()
        {
            return Ok(await _context.Tasks.ToListAsync());
        }

        // Post Request to create a task
        [HttpPost]
        public async Task<ActionResult<List<Task>>> CreateTask(Task task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return Ok(await _context.Tasks.ToListAsync());
        }

        // Put Request to update a task
        [HttpPut]
        public async Task<ActionResult<List<Task>>> UpdateTask(Task task)
        {
            // Checks if a task with that id exists
            var dbTask = await _context.Tasks.FindAsync(task.Id);
            if (dbTask == null)
                return BadRequest("Task not found.");

            // Updates all properties for the task
            dbTask.Info = task.Info;
            dbTask.DueDate = task.DueDate;
            dbTask.Status = task.Status;
            dbTask.Priority = task.Priority;

            // Saves the database and returns the task list
            await _context.SaveChangesAsync();
            return Ok(await _context.Tasks.ToListAsync());
        }

        // Delete Request to delete a task
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Task>>> DeleteTask(int id)
        {
            // Checks if a task with that id exists
            var dbTask = await _context.Tasks.FindAsync(id);
            if (dbTask == null)
                return BadRequest("Hero not found.");

            // Deletes the task
            _context.Tasks.Remove(dbTask);

            // Saves the database and returns the task list
            await _context.SaveChangesAsync();
            return Ok(await _context.Tasks.ToListAsync());
        }
    }
}
