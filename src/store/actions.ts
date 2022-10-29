import { Commit } from "vuex";

import {
  FETCH_JOBS,
  RECIEVED_JOBS,
  FETCH_DEGREES,
  RECIEVED_DEGREES,
} from "@/store/constant";

import getJobs from "@/api/getJobs";
import getDegrees from "@/api/getDegrees";

interface Context {
  commit: Commit;
}
const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECIEVED_JOBS, jobListings); // commit the mutation
  },
  [FETCH_DEGREES]: async (context: Context) => {
    const degrees = await getDegrees();
    context.commit(RECIEVED_DEGREES, degrees); // commit the mutation
  },
};

export default actions;
