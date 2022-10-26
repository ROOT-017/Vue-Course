import {
  UNIQUE_ORGANISATIONS,
  UNIQUE_JOB_TYPES,
  INCLUBE_JOB_BY_ORGANISATION,
  FILTERED_JOBS,
  INCLUBE_JOB_BY_JOB_TYPES,
} from "@/store/contants";

import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";

interface IncludeJobGetters {
  INCLUBE_JOB_BY_ORGANISATION: (job: Job) => boolean;
  INCLUBE_JOB_BY_JOB_TYPES: (job: Job) => boolean;
}

const getters = {
  [UNIQUE_ORGANISATIONS](state: GlobalState) {
    const uniqueOrganisations = new Set<string>();
    state.jobs.forEach((job) => uniqueOrganisations.add(job.organization));
    //console.log(Array.from(uniqueOrganisations));
    return uniqueOrganisations;
  },
  // [FILTERED_JOBS_BY_ORGANISATIONS](state) {
  //   if (state.selectedOrganisations.length === 0) {
  //     return state.jobs;
  //   }
  //   return state.jobs.filter((job) =>
  //     state.selectedOrganisations.includes(job.organization)
  //   );
  // },
  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  // [FILTERED_JOBS_BY_JOB_TYPES](state) {
  //   if (state.selectedJobTypes.length === 0) {
  //     return state.jobs;
  //   }
  //   return state.jobs.filter((job) =>
  //     state.selectedJobTypes.includes(job.jobType)
  //   );
  // },
  [INCLUBE_JOB_BY_ORGANISATION]: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrganisations.length === 0) return true;
    return state.selectedOrganisations.includes(job.organization);
  },
  [INCLUBE_JOB_BY_JOB_TYPES]: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUBE_JOB_BY_ORGANISATION(job))
      .filter((job) => getters.INCLUBE_JOB_BY_JOB_TYPES(job));
  },
  // [FILTERED_JOBS](state) {
  //   const noSelectedOrganisation = state.selectedOrganisations.length === 0;
  //   const noSelectedJobtypes = state.selectedJobTypes.length === 0;

  //   if (noSelectedOrganisation && noSelectedJobtypes) return state.jobs;
  //   return state.jobs
  //     .filter((job) => {
  //       if (noSelectedOrganisation) return true;
  //       return state.selectedOrganisations.includes(job.organization);
  //     })
  //     .filter((job) => {
  //       if (noSelectedJobtypes) return true;
  //       return state.selectedJobTypes.includes(job.jobType);
  //     });
  // },
};

export default getters;