<template>
  <div class="w-full h-16 bg-white border-b border-solid border-band-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobPageComputed" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />

        <span
          ><span class="text-brand-green-1"
            >{{ FILTERED_JOBS_BY_ORGANISATIONS.length + " " }} </span
          >Jobs match</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FILTERED_JOBS_BY_ORGANISATIONS } from "@/store/contants";
export default {
  name: "SubNav",
  // data() {
  //   return {
  //     onJobPage: true,
  //   };
  // },

  computed: {
    onJobPageComputed() {
      if (this.$route.path.includes("jobs/results")) {
        return true;
      }
      return false;
    },
    ...mapGetters([FILTERED_JOBS_BY_ORGANISATIONS]),
  },

  methods: {},
};
</script>
