export type ExperienceType = {
  experience: {
    company: string;
    position: string;
    dates: string;
    roles?: {
      title: string;
      responsibilities: string[];
    }[];
    responsibilities?: string[];
  }[];
};
