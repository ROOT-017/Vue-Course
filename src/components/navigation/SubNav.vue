<template>
  <div class="w-full h-16 bg-white border-b border-solid border-band-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      </div>
      <span><span class="text-brand-green-1">1653 </span>Jobs match</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobPage: true,
    };
  },
};
</script>
