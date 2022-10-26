<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilterSideBar />
    <JobListings />.
  </div>
</template>

<script>
import JobListings from "@/components/jobResults/JobListings.vue";
import JobFilterSideBar from "@/components/jobResults/jobFilterSideBar/JobFilterSideBar.vue";
export default {
  name: "JobResultView",
  components: {
    JobFilterSideBar,
    JobListings,
  },
};
</script>
