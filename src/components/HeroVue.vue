<template>
  <main>
    <div>
      <section class="flex flex-col h-screen pt-10 pb-20">
        <div class="grid grid-cols-12">
          <div class="col-start-1 col-span-1"></div>
          <div class="col-start-2 col-span-5">
            <HeadLine />
            <JobSearchForm />
          </div>
          <div class="col-start-7 col-span-5"></div>
          <div class="col-start-12 col-span-1"></div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import HeadLine from "./HeadLine.vue";
import JobSearchForm from "./JobSearchForm.vue";
export default {
  name: "HeroVue",
  components: {
    HeadLine,
    JobSearchForm,
  },
};
</script>
