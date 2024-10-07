using System;
using Domain.Entities;

namespace Application.DTOs;

public class GetAllJobsResponseDTO
{
    public List<JobPost> Jobs { get; set; }
}
