<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      type="text"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer Programming, Finance degree"
    />
  </div>
</template>

<script lang="ts">
import { Key } from "@/store";
import { useStore } from "vuex";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constant";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "JobFiltersSideBarSkills",
  setup() {
    const store = useStore(Key);
    const skillsSearchTerm = computed({
      get: () => store.state.skillsSearchTerm,
      set: (value) => store.commit(UPDATE_SKILLS_SEARCH_TERM, value),
    });

    return { skillsSearchTerm };
  },
});
</script>
