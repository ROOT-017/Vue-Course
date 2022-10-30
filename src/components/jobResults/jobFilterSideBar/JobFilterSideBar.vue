<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton
            button-text="Clear Filter"
            type="secondary"
            @click="clearUserJobSelections"
          />
        </div>
      </div>
      <!-- <AccordionVue header="Degree's"></AccordionVue> -->
      <!-- <JobFilterSideBarJobTypesVue />
      <JobFilterSideBarOrganisationVue /> -->
      <AccordionVue header="Skills and Qualfications">
        <JobFiltersSideBarSkills />
      </AccordionVue>
      <JobFiltersSideBarCheckboxGroupVue
        header="Degree's"
        :unique-values="uniqueDegree"
        :mutation="ADD_SELECTED_JOB_DEGREE"
      />
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

<script lang="ts">
import ActionButton from "@/shared/ActionButton.vue";
//import AccordionVue from "@/shared/AccordionVue.vue";
//import JobFilterSideBarOrganisationVue from ".//JobFilterSideBarOrganisation.vue";
//import AccordionVue from "@/shared/AccordionVue.vue";
//import JobFilterSideBarJobTypesVue from ".//JobFilterSideBarJobTypes.vue";
import JobFiltersSideBarCheckboxGroupVue from "@/components/jobResults/jobFilterSideBar/JobFiltersSideBarCheckboxGroup.vue";
///@/components/jobResults/jobFilterSideBar/JobFiltersSideBarCheckboxGroup.vue
import {
  useUniqueJobTypes,
  useUniqueOrganisation,
  useUniqueDegree,
} from "@/store/composables";

import { useStore } from "vuex";
import { Key } from "@/store";
import { defineComponent, onMounted } from "vue";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANISATIONS,
  ADD_SELECTED_JOB_DEGREE,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM,
} from "@/store/constant";

import JobFiltersSideBarSkills from "@/components/jobResults/jobFilterSideBar/JobFiltersSideBarSkills.vue";
import { useRoute } from "vue-router";
import AccordionVue from "@/shared/AccordionVue.vue";
export default defineComponent({
  name: "JobFilterSideBar",
  components: {
    ActionButton,
    JobFiltersSideBarSkills,
    //JobFilterSideBarOrganisationVue,
    // AccordionVue,
    //  JobFilterSideBarJobTypesVue,
    JobFiltersSideBarCheckboxGroupVue,
    AccordionVue,
  },
  setup() {
    const store = useStore(Key);

    const uniqueJobTypes = useUniqueJobTypes();

    const uniqueOrganisation = useUniqueOrganisation();

    const uniqueDegree = useUniqueDegree();

    const clearUserJobSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };

    const parseSkillSaerchTerm = () => {
      const store = useStore(Key);
      const route = useRoute();
      const role = route.query.role || "";
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
    };

    onMounted(parseSkillSaerchTerm);

    return {
      uniqueJobTypes,
      uniqueOrganisation,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANISATIONS,
      uniqueDegree,
      ADD_SELECTED_JOB_DEGREE,
      clearUserJobSelections,
    };
  },
});
</script>
