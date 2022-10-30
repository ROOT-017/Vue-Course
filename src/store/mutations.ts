import {
  LOGIN_USER,
  RECIEVED_JOBS,
  ADD_SELECTED_ORGANISATIONS,
  ADD_SELECTED_JOB_TYPES,
  RECIEVED_DEGREES,
  ADD_SELECTED_JOB_DEGREE,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM,
} from "@/store/constant";
import { GlobalState } from "@/store/types";
import { Degree, Job } from "@/api/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = !state.isLoggedIn;
  },
  [RECIEVED_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECIEVED_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANISATIONS](state: GlobalState, organisations: string[]) {
    state.selectedOrganisations = organisations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_JOB_DEGREE](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganisations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = "";
  },
  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, searchTerm: string) {
    state.skillsSearchTerm = searchTerm;
  },
};

export default mutations;
