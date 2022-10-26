export interface Job {
  id: string;
  title: string;
  organization: string;
  description: string;
  locations: string;
  jobType: string;
  minimumQualifications: string[];
  preferedQualifications: string[];
  dataAdded: string;
}
