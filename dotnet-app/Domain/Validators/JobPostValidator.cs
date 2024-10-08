using Domain.Entities;
using FluentValidation;

namespace Domain.Validators;

public class JobPostValidator : AbstractValidator<JobPost>
{
    public JobPostValidator()
    {

        RuleFor(jobPost => jobPost.Title)
            .NotEmpty()
            .WithMessage("The Title cannot be empty");

        RuleFor(jobPost => jobPost.Description.Length)
            .LessThan(1000)
            .WithMessage("Description cannot be longer than 1000 characters");
    }
}
