<template>
  <img :src="Image" alt="" class="w-8 h-8 rounded-xl object-contain" />
</template>

<script>
import profileImage from "@/assets/TERENCETOON.png";
export default {
  name: "ProfileImage",
  data() {
    return {
      Image: profileImage,
    };
  },
};
</script>
