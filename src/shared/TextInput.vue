<template>
  <div>
    <input
      :id="label"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full text-lg font-normal focus:outline-none"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
  },
  // data() {
  //   return {
  //     value: "",
  //   };
  // },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event: Event) {
      // this.value = $event.target.value;
      const target = $event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
  },
});
</script>
