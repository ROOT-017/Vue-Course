<template>
  <div>RSULT View{{ currentJobIdSearch }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobIdSearch() {
      return this.$route.params.id;
    },
  },
};
</script>
