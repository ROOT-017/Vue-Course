<template>
  <div>
    <h4>Hey</h4>
    <div><img :src="img" alt="" /></div>
  </div>
</template>

<script>
import img from "@/assets/TERENCETOON.png";
export default {
  name: "TestComponent",
  data() {
    return {
      img,
    };
  },
};
</script>
