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

<script>
import HeaderContainer from "@/shared/HeaderContainer.vue";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>
