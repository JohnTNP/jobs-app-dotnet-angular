using Domain.Entities;
using Domain.Validators;
using FluentValidation;

namespace Domain.Tests.Entities;

public class JobPostTests
{
    [Fact]
    public void CreateJobPost_ShouldCreateJobPost()
    {
        var jobPost = new JobPost("Job Title", "Job Description", "Location");

        Assert.NotNull(jobPost);
    }

    [Fact]
    public void CreateJobPost_ShouldThrowValidationException_WhenTitleIsEmpty()
    {
        var jobPost = new JobPost("", "Job Description", "Location");

        Assert.Throws<ValidationException>(jobPost.ValidateJobPost);
    }

    [Fact]
    public void CreateJobPost_ShouldThrowValidationException_WhenDescriptionIsGreaterThan1000Characters()
    {
        var testString = new string('a', 1001);
        var jobPost = new JobPost("Job Title", testString, "Location");

        Assert.Throws<ValidationException>(jobPost.ValidateJobPost);
    }
}
