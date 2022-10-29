<template>
  <AccordionVue header="Organisation">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organisation in uniqueOrganisation"
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
//import { mapGetters, mapMutations } from "vuex";
import { ADD_SELECTED_ORGANISATIONS } from "@/store/constant";
import { ref } from "vue";
import { useStore } from "vuex";
import { useUniqueOrganisation } from "@/store/composables";
import { useRouter } from "vue-router";

import AccordionVue from "@/shared/AccordionVue.vue";

export default {
  name: "JobFilterSideBarOrganisation",
  components: {
    AccordionVue,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedOrganisations = ref([]);

    const uniqueOrganisation = useUniqueOrganisation();

    const selectOrganisation = () => {
      store.commit(ADD_SELECTED_ORGANISATIONS, selectedOrganisations.value);
      router.push({ name: "JobResult" });
    };

    return { selectedOrganisations, uniqueOrganisation, selectOrganisation };
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
