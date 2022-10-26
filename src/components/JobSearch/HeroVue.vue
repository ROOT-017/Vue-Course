<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <HeadLine />
          <JobSearchForm />
        </div>
        <div class="col-start-7 col-span-5">
          <div class="flex justify-center h-full">
            <HeroImage />
          </div>
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <SpotLightVue class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img :src="img" :alt="title" class="object-contain" />
          <div class="h-48 px-6 mt-3">
            <h3 class="text-lg">{{ title }}</h3>
            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>
          <router-link
            to="/jobs/results"
            class="pb-4 px-6 text-sm text-brand-blue-1"
            >See jobs</router-link
          ></router-link
        ></template
      >
    </SpotLightVue>
  </main>
</template>

<script lang="ts">
import HeadLine from "./HeadLine.vue";
import JobSearchForm from "../navigation/JobSearchForm.vue";
import HeroImage from "./HeroImage.vue";
import SpotLightVue from "@/components/jobResults/SpotLight.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeroVue",
  components: {
    HeadLine,
    JobSearchForm,
    HeroImage,
    SpotLightVue,
  },
});
</script>
