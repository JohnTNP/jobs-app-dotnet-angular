using Application.DTOs;
using Domain.Entities;
using Domain.Interfaces;
using MediatR;

namespace Application.Queries.Handlers;

public class GetAllJobsQueryHandler : IRequestHandler<GetAllJobsQuery, GetAllJobsResponseDTO>
{
    private readonly IJobPostRepository _jobPostRepository;
    public GetAllJobsQueryHandler(IJobPostRepository jobPostRepository)
    {
        _jobPostRepository = jobPostRepository;
    }
    public async Task<GetAllJobsResponseDTO> Handle(GetAllJobsQuery request, CancellationToken cancellationToken)
    {
        var jobs = await _jobPostRepository.GetAllAsync();

        var response = new GetAllJobsResponseDTO
        {
            Jobs = jobs.Select(job => new JobPost
            {
                Id = job.Id,
                Title = job.Title,
                Description = job.Description,
            }).ToList()
        };

        return response;
    }

}
