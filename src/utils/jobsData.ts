import { Job } from '../types/job';

// Generate 200 sample jobs
export const generateJobs = (): Job[] => {
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
  const locations = ['Worldwide', 'Americas', 'Europe', 'Asia', 'Remote'];
  const companies = ['TechCorp', 'DesignLabs', 'InnovateSoft', 'GlobalTech', 'RemoteFirst'];
  
  return Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    title: `${['Senior', 'Lead', 'Principal', 'Junior'][i % 4]} ${['Frontend', 'Backend', 'Full Stack', 'DevOps'][i % 4]} Developer`,
    company: companies[i % companies.length],
    location: locations[i % locations.length],
    type: jobTypes[i % jobTypes.length],
    salary: `$${70 + (i % 80)}k - $${90 + (i % 100)}k`,
    posted: `${i % 30 + 1}d ago`,
    description: 'We are seeking an experienced developer to join our remote-first team. The ideal candidate will have strong problem-solving skills and a passion for creating exceptional user experiences.',
    logo: `https://images.unsplash.com/photo-${1550000000000 + i}?w=50&h=50&fit=crop`
  }));
};