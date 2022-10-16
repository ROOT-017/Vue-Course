<template>
  <form
    class="flex w-full h-12 items-center mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10" for="role">Role</label>
        <TextInput
          v-model="role"
          placeholder="Software Engineer"
          label="role"
        />
      </div>
      <span
        class="flex items-center px-3 h-full border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10" for="location">Where?</label>
        <TextInput
          v-model="location"
          placeholder="Los Angeles"
          label="location"
        />
      </div>
    </div>
    <ActionButton button-text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/shared/ActionButton.vue";
import TextInput from "@/shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchJobs() {
      console.log("searching for jobs");
      this.$router.push({
        name: "JobResult",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>
