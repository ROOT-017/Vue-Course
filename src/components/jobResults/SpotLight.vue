<template>
  <div>
    <ul>
      <li v-for="spotlight in spotlights" :key="spotlight.id">
        <slot :spotlight="spotlight"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SpotLight",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const baseUrl = process.env.VUE_APP_API_URL;
    const url = `${baseUrl}/spotlight`;
    const response = await axios.get(url);
    this.spotlights = response.data;
  },
};
</script>
