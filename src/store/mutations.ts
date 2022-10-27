import {
  LOGIN_USER,
  RECIEVED_JOBS,
  ADD_SELECTED_ORGANISATIONS,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/contants";
import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECIEVED_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANISATIONS](state: GlobalState, organisations: string[]) {
    state.selectedOrganisations = organisations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
};

export default mutations;
