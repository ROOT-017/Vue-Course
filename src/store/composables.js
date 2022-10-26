import { useStore } from "vuex";
import { computed } from "vue";
import {
  FETCH_JOBS,
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANISATIONS,
} from "./contants";

/*Getters */
export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]); // <--- this is the computed property that we are using to determine the number of jobs that match the search criteria
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganisation = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_ORGANISATIONS]);
};

/*Actions */

export const useFetchJobsDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS);
};
