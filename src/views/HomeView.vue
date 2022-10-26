<template>
  <div>
    <HeroVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import HeroVue from "@/components/JobSearch/HeroVue.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroVue,
  },
});
</script>
