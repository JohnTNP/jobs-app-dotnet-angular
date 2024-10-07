using Application.Commands;
using Application.DTOs;
using Domain.Entities;
using Domain.Interfaces;
using MediatR;

namespace Application.Commands.Handlers;

public class CreateJobPostCommandHandler : IRequestHandler<CreateJobPostCommand, GeneralResponseDTO>
{
    private readonly IJobPostRepository _jobPostRepository;

    public CreateJobPostCommandHandler(IJobPostRepository jobPostRepository)
    {
        _jobPostRepository = jobPostRepository;
    }

    public async Task<GeneralResponseDTO> Handle(CreateJobPostCommand request, CancellationToken cancellationToken)
    {
        var jobPost = new JobPost
        {
            Title = request.Request.Title,
            Description = request.Request.Description,
            Created = DateTime.UtcNow,
            Location = request.Request.Location
        };

        await _jobPostRepository.CreateAsync(jobPost);

        return new GeneralResponseDTO
        {
            Success = true,
            Message = "Job post created successfully"
        };
    }
}
