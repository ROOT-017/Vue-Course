<template>
  <div class="w-full h-16 bg-white border-b border-solid border-band-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />

        <span
          ><span class="text-brand-green-1"
            >{{ FILTERED_JOBS.length + " " }} </span
          >Jobs match</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { mapGetters } from "vuex";
// import { FILTERED_JOBS } from "@/store/contants";

// import { computed } from "vue";
// import { useStore } from "vuex";
//import { useRoute } from "vue-router";
import useConfirmRoute from "@/composables/tsFiles/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubNav",

  setup() {
    const onJobResultsPage = useConfirmRoute("JobResult");
    // const route = useRoute();
    // const onJobResultsPage = computed(() => route.name === "JobResult"); // <--- this is the computed property that we are using to determine if we are on the JobResults page
    // route.path.includes("jobs/results"));

    //const store = useStore();
    const FILTERED_JOBS = useFilteredJobs(); // <--- this is the computed property that we are using to determine the number of jobs that match the search criteria

    return { onJobResultsPage, FILTERED_JOBS };
  },

  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   onJobResultsPage() {
  //     if (this.$route.path) {
  //       return true;
  //     }
  //     return false;
  //   },
  // },
});
</script>
