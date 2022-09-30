<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-7xl mb-14">
      <span :class="titleClasses">{{ title }} </span> <br />
      for Everyone
    </h1>
    <h2 class="font-light text-2xl">Find your next job at ROOT TECH.</h2>
  </section>
</template>

<script>
import NextElementInList from "@/utils/NextElementInList.js";
export default {
  name: "HeadLine",

  data() {
    return {
      title: "Build",
      interval: null,
    };
  },

  computed: {
    titleClasses() {
      return {
        [this.title.toLowerCase()]: true,
        // build: this.title === "Build",
        // create: this.title === "Create",
        // design: this.title === "Design",
        // code: this.title === "Code",
      };
    },
  },

  created() {
    this.changeTitle();
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const titles = ["Build", "Create", "Design", "Code"];
        this.title = NextElementInList(titles, this.title);
      }, 5000);
    },
  },
};
</script>

<style scope>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}

.code {
  color: #d93025;
}
.design {
  color: #f9ab00;
}
</style>
