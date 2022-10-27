<template>
  <div class="py-5 border-b border-solid border-brand-gray-2-">
    <div class="flex flex-wrap justify-between cursor-pointer" @click="open">
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Not added yet! Sorry!</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccordionVue",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };
    const caretIcon = computed(() => {
      return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
    });

    return { isOpen, open, caretIcon };
  },

  // data() {
  //   return {
  //     isOpen: false,
  //   };
  // },
  // computed: {
  //   caretIcon() {
  //     return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //   },
  // },
  // methods: {
  //   open() {
  //     this.isOpen = !this.isOpen;
  //   },
  // },
});
</script>
