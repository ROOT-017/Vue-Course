<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilterSideBar />
    <JobListings />.
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobListings from "@/components/jobResults/JobListings.vue";
import JobFilterSideBar from "@/components/jobResults/jobFilterSideBar/JobFilterSideBar.vue";
export default defineComponent({
  name: "JobResultView",
  components: {
    JobFilterSideBar,
    JobListings,
  },
});
</script>
