import {
  UNIQUE_ORGANISATIONS,
  FILTERED_JOBS_BY_ORGANISATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS_BY_JOB_TYPES,
  FILTERED_JOBS,
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
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    if (state.selectedJobTypes.length === 0) {
      return state.jobs;
    }
    return state.jobs.filter((job) =>
      state.selectedJobTypes.includes(job.jobType)
    );
  },
  [FILTERED_JOBS](state) {
    const noSelectedOrganisation = state.selectedOrganisations.length === 0;
    const noSelectedJobtypes = state.selectedJobTypes.length === 0;

    if (noSelectedOrganisation && noSelectedJobtypes) return state.jobs;
    return state.jobs
      .filter((job) => {
        if (noSelectedOrganisation) return true;
        return state.selectedOrganisations.includes(job.organization);
      })
      .filter((job) => {
        if (noSelectedJobtypes) return true;
        return state.selectedJobTypes.includes(job.jobType);
      });
  },
};

export default getters;
