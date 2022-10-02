<template>
  <div>
    <MainNav />
    <HeroVue />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import HeroVue from "@/components/JobSearch/HeroVue.vue";
export default {
  name: "App",
  components: {
    MainNav,
    HeroVue,
  },
};
</script>
