<template>
  <button :class="buttonClass">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed, toRefs } from "vue";

export default defineComponent({
  name: "ActionButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "primary",
      validator: (value: string) => {
        return ["primary", "secondary"].includes(value);
      },
    },
    buttonText: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { type } = toRefs(props);

    const buttonClass = computed(() => {
      return {
        [type.value]: true,
      };
    });
    return { buttonClass };
  },
});
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply text-white rounded  bg-brand-blue-1 hover:shadow-blue-1;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
