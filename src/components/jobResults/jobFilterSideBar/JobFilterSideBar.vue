<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton button-text="Clear Filter" type="secondary" />
        </div>
      </div>
      <AccordionVue header="Degree's"
        ><h2>Here will be the requires degrees</h2></AccordionVue
      >
      <JobFilterSideBarJobTypesVue />
      <JobFilterSideBarOrganisationVue />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/shared/ActionButton.vue";
//import AccordionVue from "@/shared/AccordionVue.vue";
import JobFilterSideBarOrganisationVue from ".//JobFilterSideBarOrganisation.vue";
import AccordionVue from "@/shared/AccordionVue.vue";
import JobFilterSideBarJobTypesVue from ".//JobFilterSideBarJobTypes.vue";
export default {
  name: "JobFilterSideBar",
  components: {
    ActionButton,
    JobFilterSideBarOrganisationVue,
    AccordionVue,
    JobFilterSideBarJobTypesVue,
  },
};
</script>
