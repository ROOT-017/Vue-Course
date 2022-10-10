<template>
  <AccordionVue header="Organisation">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organisation in UNIQUE_ORGANISATIONS"
            :key="organisation"
            class="w-1/2 h-8"
          >
            <input
              :id="organisation"
              v-model="selectedOrganisations"
              :value="organisation"
              type="checkbox"
              class="mr-3"
              @change="selectOrganisation"
            />
            <label :for="organisation"> {{ organisation }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </AccordionVue>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import {
  UNIQUE_ORGANISATIONS,
  ADD_SELECTED_ORGANISATIONS,
} from "@/store/contants";

import AccordionVue from "@/shared/AccordionVue.vue";

export default {
  name: "JobFilterSideBarOrganisation",
  components: {
    AccordionVue,
  },
  data() {
    return {
      selectedOrganisations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANISATIONS]),
    //UNIQUE_ORGANISATIONS() {
    //  return this.$store.getters.UNIQUE_ORGANISATIONS;
    //},
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANISATIONS]),

    selectOrganisation() {
      this.ADD_SELECTED_ORGANISATIONS(this.selectedOrganisations);
    },
  },
};
</script>
