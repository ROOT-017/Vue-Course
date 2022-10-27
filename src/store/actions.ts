import { Commit } from "vuex";

import { FETCH_JOBS, RECIEVED_JOBS } from "@/store/contants";
import getJobs from "@/api/getJobs";

interface Context {
  commit: Commit;
}
const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECIEVED_JOBS, jobListings); // commit the mutation
  },
};

export default actions;
