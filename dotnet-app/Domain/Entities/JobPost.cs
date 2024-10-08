using Domain.Validators;
using FluentValidation;

namespace Domain.Entities;

public class JobPost
{
    public Guid Id { get; private set; }
    public string Title { get; private set; }
    public string Description { get; private set; }
    public DateTime Created { get; private set; }
    public string? Location { get; private set; }

    public JobPost(string title, string description, string? location)
    {
        Id = Guid.NewGuid();
        Title = title;
        Description = description;
        Created = DateTime.UtcNow;
        Location = location;
    }

    public void ValidateJobPost()
    {
        var validator = new JobPostValidator();
        var result = validator.Validate(this);

        if (!result.IsValid)
        {
            throw new ValidationException(result.Errors);
        }
    }
}
