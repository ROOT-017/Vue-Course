import {
  UNIQUE_ORGANISATIONS,
  FILTERED_JOBS_BY_ORGANISATIONS,
} from "@/store/contants";

const getters = {
  [UNIQUE_ORGANISATIONS](state) {
    const uniqueOrganisations = new Set();
    state.jobs.forEach((job) => uniqueOrganisations.add(job.organization));
    //console.log(Array.from(uniqueOrganisations));
    return uniqueOrganisations;
  },
  [FILTERED_JOBS_BY_ORGANISATIONS](state) {
    if (state.selectedOrganisations.length === 0) {
      return state.jobs;
    }
    return state.jobs.filter((job) =>
      state.selectedOrganisations.includes(job.organization)
    );
  },
};

export default getters;
