<template>
  <AccordionVue header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobtype in uniqueJobsTypes"
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
//import { mapGetters, mapMutations } from "vuex";
import { ADD_SELECTED_JOB_TYPES } from "@/store/contants";
import AccordionVue from "@/shared/AccordionVue.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useUniqueJobTypes } from "@/store/composables";
import { ref } from "vue"; //  <--- 1. import ref

export default {
  name: "JobFilterSideBarJobTypes",
  components: {
    AccordionVue,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedJobTypes = ref([]);

    const uniqueJobsTypes = useUniqueJobTypes();

    const selectJobTypes = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResult" });
    };

    return { selectedJobTypes, selectJobTypes, uniqueJobsTypes };
  },

  // data() {
  // return {
  // selectedJobTypes: [],
  // };
  // },
  // computed: {
  // ...mapGetters([uniqueJobsTypes]),
  // },
  // methods: {
  // ...mapMutations([ADD_SELECTED_JOB_TYPES]),
  //
  // selectJobTypes() {
  // this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
  // this.$router.push({ name: "JobResult" });
  // },
  // },
};
</script>
