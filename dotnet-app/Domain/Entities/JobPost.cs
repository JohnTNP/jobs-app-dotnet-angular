using System.ComponentModel.DataAnnotations;

namespace Domain.Entities;

public class JobPost
{
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public DateTime Created { get; set; }
    public string? Location { get; set; }
}
