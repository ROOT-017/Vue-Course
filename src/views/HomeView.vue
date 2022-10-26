<template>
  <div>
    <HeroVue />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import HeroVue from "@/components/JobSearch/HeroVue.vue";

export default {
  name: "HomeView",
  components: {
    HeroVue,
  },
};
</script>
