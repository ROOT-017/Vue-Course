<template>
  <div>
    <h1>RESULT View</h1>
    {{ currentJobIdSearch }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  name: "JobView",

  setup() {
    const currentJobIdSearch = computed(() => {
      const route = useRoute();
      const curentJobId = route.params.id;
      return curentJobId;
    });
    return { currentJobIdSearch };
  },
});
</script>
