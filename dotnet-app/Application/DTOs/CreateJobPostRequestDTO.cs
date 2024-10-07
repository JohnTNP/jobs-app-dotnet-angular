namespace Application.DTOs;

public class CreateJobPostRequestDTO
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string? Location { get; set; }
}
