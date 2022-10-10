<template>
  <AccordionVue header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobtype in UNIQUE_JOB_TYPES"
            :key="jobtype"
            class="w-1/2 h-8"
          >
            <input
              :id="jobtype"
              v-model="selectedJobTypes"
              :value="jobtype"
              type="checkbox"
              class="mr-3"
              @change="selectJobTypes"
            />
            <label :for="jobtype"> {{ jobtype }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </AccordionVue>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } from "@/store/contants";
import AccordionVue from "@/shared/AccordionVue.vue";

export default {
  name: "JobFilterSideBarJobTypes",
  components: {
    AccordionVue,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),

    selectJobTypes() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
    },
  },
};
</script>
,
