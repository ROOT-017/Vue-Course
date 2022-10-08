import { FETCH_JOBS, RECIEVED_JOBS } from "@/store/contants";
import getJobs from "@/api/getJobs";

const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECIEVED_JOBS, jobListings); // commit the mutation
  },
};

export default actions;
