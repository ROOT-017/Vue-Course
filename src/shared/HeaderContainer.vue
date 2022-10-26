<template>
  <div class="w-full border-solid border-b border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Sample Title</slot>
      <slot name="subtitle"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderContainer",
});
</script>
