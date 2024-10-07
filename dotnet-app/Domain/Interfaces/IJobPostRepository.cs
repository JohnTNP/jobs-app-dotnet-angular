using Domain.Entities;

namespace Domain.Interfaces;

public interface IJobPostRepository
{
    Task<JobPost> GetByIdAsync(Guid id);
    Task<IEnumerable<JobPost>> GetAllAsync();
    Task<JobPost> CreateAsync(JobPost jobPost);
    Task<JobPost> UpdateAsync(JobPost jobPost);
    Task<bool> DeleteAsync(Guid id);
}
