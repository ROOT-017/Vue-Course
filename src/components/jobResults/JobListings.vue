<template>
  <main class="flex-auto w-full p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in displayJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">
          page <span>{{ currentPage }}</span> of
          <span>{{ maxPage }}</span>
        </p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResult', query: { page: previousPage } }"
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
//import { mapActions, mapGetters } from "vuex";
import { computed, onMounted } from "vue";
//import { useStore } from "vuex";
//import { useRoute } from "vue-router";
import { useFilteredJobs, useFetchJobsDispatch } from "@/store/composables";
//import { FETCH_JOBS } from "@/store/contants";
//import { FETCH_JOBS, FILTERED_JOBS } from "@/store/contants";
import JobListing from "@/components/jobResults/JobListing.vue";

import useCurrentPage from "@/composables/useCurrentPage";

import usePreviousAndNextPage from "@/composables/usePreviousAndNextPage";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    //   const store = useStore();
    //const route = useRoute();

    //  const fetchJobs = () => store.dispatch(FETCH_JOBS);

    const filteredJobs = useFilteredJobs();

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));

    const currentPage = useCurrentPage();
    const { previousPage, nextPage } = usePreviousAndNextPage(
      currentPage.value,
      maxPage.value
    );
    // const previousPage = computed(() => {
    //   const previousPage = currentPage.value - 1;
    //   const firstPage = 1;
    //   return previousPage >= firstPage ? previousPage : undefined;
    // });

    // const nextPage = computed(() => {
    //   const nextPage = currentPage.value + 1;
    //   const maxPage = Math.ceil(filteredJobs.value.length);
    //   return nextPage <= maxPage ? nextPage : undefined;
    // });

    const displayJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    onMounted(useFetchJobsDispatch);
    return {
      displayJobs,
      currentPage,
      previousPage,
      nextPage,
      maxPage,
    };
  },
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),

  //   currentPage() {
  //     const pageString = this.$route.query.page || "1";
  //     return Number.parseInt(pageString);
  //   },

  //   previosPage() {
  //     const previousPage = this.currentPage - 1;
  //     const firstPage = 1;
  //     return previousPage >= firstPage ? previousPage : undefined;
  //   },

  //   nextPage() {
  //     const nextPage = this.currentPage + 1;
  //     const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
  //     return nextPage <= maxPage ? nextPage : undefined;
  //   },

  //   maxPage() {
  //     return Math.ceil(this.FILTERED_JOBS.length / 10);
  //   },

  //   displayJobs() {
  //     const pageNumber = this.currentPage;
  //     const firstJobIndex = (pageNumber - 1) * 10;
  //     const lastJobIndex = pageNumber * 10;
  //     return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
  //   },
  // },
  // async mounted() {
  //   this.FETCH_JOBS();
  // },
  // methods: {
  //   ...mapActions([FETCH_JOBS]),
  // },
};
</script>
