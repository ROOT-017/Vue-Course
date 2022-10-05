<template>
  <div>
    <MainNav />
    <router-view />
  </div>
</template>

<script>
import MainNav from "./components/navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
