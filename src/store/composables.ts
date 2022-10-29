import { useStore } from "vuex";
import { computed } from "vue";
import {
  FETCH_JOBS,
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANISATIONS,
  UNIQUE_DEGREE,
  FETCH_DEGREES,
} from "./constant";

import { Job } from "@/api/types";
import { Key } from ".";

/*Getters */
export const useFilteredJobs = () => {
  const store = useStore(Key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]); // <--- this is the computed property that we are using to determine the number of jobs that match the search criteria
};

export const useUniqueJobTypes = () => {
  const store = useStore(Key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganisation = () => {
  const store = useStore(Key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANISATIONS]);
};

export const useUniqueDegree = () => {
  const store = useStore(Key);
  return computed<string[]>(() => store.getters[UNIQUE_DEGREE]);
};

/*Actions */

export const useFetchJobsDispatch = () => {
  const store = useStore(Key);
  store.dispatch(FETCH_JOBS);
};

export const useFetchdegreesDispatch = () => {
  const store = useStore(Key);
  store.dispatch(FETCH_DEGREES);
};
