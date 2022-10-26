<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts">
//import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import axios from "axios";
import { ref, onMounted } from "vue";

interface SpotLight {
  id: number;
  description: string;
  img: string;
  title: string;
}

export default defineComponent({
  name: "SpotLight",
  setup() {
    const spotlights = ref<SpotLight[]>([]);

    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlight`;
      const response = await axios.get<SpotLight[]>(url);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);

    return { spotlights };
  },
  // data() {
  //   return {
  //     spotlights: [],
  //   };
  // },
  // async mounted() {
  //   const baseUrl = process.env.VUE_APP_API_URL;
  //   const url = `${baseUrl}/spotlight`;
  //   const response = await axios.get(url);
  //   this.spotlights = response.data;
  // },
});
</script>
