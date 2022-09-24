<template>
  <button :class="buttonClass">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply text-white rounded bg-brand-blue-1 hover:shadow-blue-1;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
