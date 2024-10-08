export interface JobPost {
  id: string;
  title: string;
  description: string;
  created: Date;
  location: string | null;
}