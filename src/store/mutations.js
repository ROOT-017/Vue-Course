import {
  LOGIN_USER,
  RECIEVED_JOBS,
  ADD_SELECTED_ORGANISATIONS,
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
};

export default mutations;
