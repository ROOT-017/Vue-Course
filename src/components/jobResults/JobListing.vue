<template>
  <li class="mb-7">
    <router-link
      :to="jobPageUrl"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="inline-block mr-5"
              >
                {{ location + "," }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div class="">
          <h3>Qualification</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="qualifiaction in job.minimumQualifications"
                :key="qualifiaction"
              >
                {{ qualifiaction }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageUrl" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    jobPageUrl() {
      return `/jobs/results/${this.job.id}`;
    },
  },
};
</script>
