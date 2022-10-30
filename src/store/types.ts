import { Job, Degree } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedOrganisations: string[];
  selectedJobTypes: string[];
  onJobPage: boolean;
  degrees: Degree[];
  selectedDegrees: string[];
  skillsSearchTerm: string;
}
