import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganisations: [],
    onJobPage: false,
    selectedJobTypes: [],
  };
};

export default state;
