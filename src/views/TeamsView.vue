<template>
  <div>
    <HeaderContainer>
      <template #title>
        <h1 class="w-full text-4xl font-normal">Teams</h1>
      </template>
      <template #subtitle
        ><h2 class="w-full text-base font-light my-4">Sub Teams</h2></template
      >
    </HeaderContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/shared/HeaderContainer.vue";

export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
});
</script>
