import {
  LOGIN_USER,
  RECIEVED_JOBS,
  ADD_SELECTED_ORGANISATIONS,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/contants";

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECIEVED_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANISATIONS](state, organisations) {
    state.selectedOrganisations = organisations;
  },
  [ADD_SELECTED_JOB_TYPES](state, jobTypes) {
    state.selectedJobTypes = jobTypes;
  },
};

export default mutations;
