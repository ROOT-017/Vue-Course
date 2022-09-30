<template>
  <div>
    <MainNav />
    <HeroVue />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroVue from "@/components/HeroVue.vue";
export default {
  name: "App",
  components: {
    MainNav,
    HeroVue,
  },
};
</script>
