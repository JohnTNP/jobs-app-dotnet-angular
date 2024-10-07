using Application.Commands;
using Application.DTOs;
using Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class JobPostController : ControllerBase
    {
        [HttpGet("jobs")]
        public async Task<IActionResult> GetAllJobs([FromServices] IMediator mediator)
        {
            var query = new GetAllJobsQuery();
            var result = await mediator.Send(query);
            return Ok(result);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateJobPost([FromServices] IMediator mediator, [FromBody] CreateJobPostRequestDTO request)
        {
            var command = new CreateJobPostCommand { Request = request };
            var result = await mediator.Send(command);
            return Ok(result);
        }
    }
}
