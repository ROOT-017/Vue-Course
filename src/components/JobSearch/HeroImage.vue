<template>
  <div>
    <img :src="img" alt="" class="" />
  </div>
</template>

<script>
import img_1 from "@/assets/img_1.png";
import img_2 from "@/assets/img_2.png";
import img_3 from "@/assets/img_3.png";
import img_4 from "@/assets/img_4.png";

import NextElementInList from "@/utils/NextElementInList";
export default {
  name: "HeroImage",
  data() {
    return {
      img: img_1,
      imageList: [img_1, img_2, img_3, img_4],
    };
  },
  mounted() {
    this.ChangeHeroImage();
  },
  methods: {
    ChangeHeroImage() {
      setInterval(() => {
        this.img = NextElementInList(this.imageList, this.img);
      }, 5000);
    },
  },
};
</script>
