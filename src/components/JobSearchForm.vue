<template>
  <form
    class="flex w-full h-12 items-center mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10" for="role">Role</label>
        <input
          id="role"
          type="text"
          placeholder="Software Engineer"
          :value="role"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="flex items-center px-3 h-full border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10" for="location">Where?</label>
        <input
          id="location"
          type="text"
          placeholder="Los Angeles"
          :value="location"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <ActionButton button-text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "./ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: { ActionButton },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    text() {
      console.log(this.location);
    },
  },
};
</script>
