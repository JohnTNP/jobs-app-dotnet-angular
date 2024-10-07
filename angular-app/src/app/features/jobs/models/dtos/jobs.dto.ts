import { JobPost } from "../job-post.model";

export interface GetJobsResponseDTO {
    jobs: JobPost[];
}

export interface CreateJobPostRequestDTO {
    title: string;
    description: string;
    location: string;
}
