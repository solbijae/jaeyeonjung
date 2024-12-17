export type ProjectsType = {
  projects: {
    type: string;
    items: {
      name: string;
      skills?: string[];
      image?: string[];
      about?: string;
      visit?: string;
      on_progress: boolean;
    }[];
  }[];
}