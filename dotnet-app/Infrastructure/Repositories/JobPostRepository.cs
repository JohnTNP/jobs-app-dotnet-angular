using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class JobPostRepository : IJobPostRepository
{
    private readonly AppDbContext _context;

    public JobPostRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<JobPost> CreateAsync(JobPost jobPost)
    {
        await _context.JobPosts.AddAsync(jobPost);
        await _context.SaveChangesAsync();
        return jobPost;
    }

    public Task<bool> DeleteAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<JobPost>> GetAllAsync()
    {
        return await _context.JobPosts.ToListAsync();
    }

    public Task<JobPost> GetByIdAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<JobPost> UpdateAsync(JobPost jobPost)
    {
        throw new NotImplementedException();
    }
}
