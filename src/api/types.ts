export interface Job {
  id: string;
  title: string;
  organization: string;
  description: string;
  location: string;
  jobType: string;
  mininumQualifications: string[];
  preferedQualifications: string[];
  dataAdded: string;
}
