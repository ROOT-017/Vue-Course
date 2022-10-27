<template>
  <img :src="Image" alt="userImage" class="w-8 h-8 rounded-xl object-contain" />
</template>

<script lang="ts">
//import Img from "@/assets/TERENCETOON.png";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileImage",
  data() {
    return {
      Image: "@/assets/TERENCETOON.png",
    };
  },
});
</script>
