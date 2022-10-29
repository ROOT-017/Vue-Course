export interface Job {
  id: string;
  title: string;
  organization: string;
  description: string;
  locations: string;
  jobType: string;
  degree: string;
  minimumQualifications: string[];
  preferedQualifications: string[];
  dataAdded: string;
}

export interface Degree {
  id: number;
  degree: string;
}
