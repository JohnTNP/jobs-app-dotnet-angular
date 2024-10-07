using Application.DTOs;
using Domain.Entities;
using MediatR;

namespace Application.Commands;

public class CreateJobPostCommand : IRequest<GeneralResponseDTO>
{
    public CreateJobPostRequestDTO Request { get; set; }
}
