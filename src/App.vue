<template>
  <div>
    <MainNav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "./components/navigation/MainNav.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
  },
});
</script>
