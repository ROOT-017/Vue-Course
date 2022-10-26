<template>
  <AccordionVue :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value"> {{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </AccordionVue>
</template>

<script>
//import { mapGetters, mapMutations } from "vuex";
//import { ADD_SELECTED_ORGANISATIONS } from "@/store/contants";
import { ref } from "vue";
import { useStore } from "vuex";
//import { useUniqueOrganisation } from "@/store/composables";
import { useRouter } from "vue-router";

import AccordionVue from "@/shared/AccordionVue.vue";

export default {
  name: "JobFiltersSideBarCheckboxGroup",
  components: {
    AccordionVue,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: Set,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const selectedValues = ref([]);

    // const uniqueOrganisation = useUniqueOrganisation();

    const selectValue = () => {
      //      store.commit(ADD_SELECTED_ORGANISATIONS, selectedValues.value);
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResult" });
    };

    return { selectedValues, selectValue };
  },
  // data() {
  //   return {
  //     selectedOrganisations: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([uniqueOrganisation]),
  //   //uniqueOrganisation() {
  //   //  return this.$store.getters.uniqueOrganisation;
  //   //},
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_ORGANISATIONS]),

  //   selectOrganisation() {
  //     this.ADD_SELECTED_ORGANISATIONS(this.selectedOrganisations);
  //     this.$router.push({ name: "JobResult" });
  //   },
  // },
};
</script>
