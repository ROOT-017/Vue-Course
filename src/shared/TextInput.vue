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

<script>
export default {
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
    handleInput($event) {
      // this.value = $event.target.value;
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
