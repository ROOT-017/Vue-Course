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
      <AccordionVue header="Degree's"></AccordionVue>
      <!-- <JobFilterSideBarJobTypesVue />
      <JobFilterSideBarOrganisationVue /> -->
      <JobFiltersSideBarCheckboxGroupVue
        header="Job Types"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
      />
      <JobFiltersSideBarCheckboxGroupVue
        header="Organisation"
        :unique-values="uniqueOrganisation"
        :mutation="ADD_SELECTED_ORGANISATIONS"
      />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/shared/ActionButton.vue";
//import AccordionVue from "@/shared/AccordionVue.vue";
//import JobFilterSideBarOrganisationVue from ".//JobFilterSideBarOrganisation.vue";
import AccordionVue from "@/shared/AccordionVue.vue";
//import JobFilterSideBarJobTypesVue from ".//JobFilterSideBarJobTypes.vue";
import JobFiltersSideBarCheckboxGroupVue from "@/components/jobResults/jobFilterSideBar/JobFiltersSideBarCheckboxGroup.vue";
///@/components/jobResults/jobFilterSideBar/JobFiltersSideBarCheckboxGroup.vue
import { useUniqueJobTypes, useUniqueOrganisation } from "@/store/composables";

import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANISATIONS,
} from "@/store/contants";

export default {
  name: "JobFilterSideBar",
  components: {
    ActionButton,
    //JobFilterSideBarOrganisationVue,
    AccordionVue,
    //  JobFilterSideBarJobTypesVue,
    JobFiltersSideBarCheckboxGroupVue,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    const uniqueOrganisation = useUniqueOrganisation();

    return {
      uniqueJobTypes,
      uniqueOrganisation,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANISATIONS,
    };
  },
};
</script>
