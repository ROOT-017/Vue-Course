<template>
  <main class="flex-auto w-full p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in displayJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">
          page <span>{{ currentPage }}</span>
        </p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previosPage"
            :to="{ name: 'JobResult', query: { page: previosPage } }"
            class="mr-2 text-brand-blue-1"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResult', query: { page: nextPage } }"
            class="mr-2 text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { FETCH_JOBS } from "@/store";
import JobListing from "@/components/jobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: { JobListing },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },

    previosPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },

    nextPage() {
      const nextPage = this.currentPage + 1;
      const lastPage = this.jobs.length / 10;
      return nextPage <= lastPage ? nextPage : undefined;
    },

    displayJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },

    ...mapState(["jobs"]),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>
