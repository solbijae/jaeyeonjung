export type ProjectsType = {
  projects: {
    type: string;
    items: {
      name: string;
      skills?: string[];
      images?: string[];
      about?: string;
      visit?: string;
      github?: string;
      on_progress: boolean;
    }[];
  }[];
};
