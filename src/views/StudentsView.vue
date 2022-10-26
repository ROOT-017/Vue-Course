<template>
  <div>
    <HeaderContainer>
      <template #title>STUDENTS</template>
      <template #subtitle>Student Subtitle</template>
    </HeaderContainer>
  </div>
</template>

<script>
import HeaderContainer from "@/shared/HeaderContainer.vue";
export default {
  name: "StudentsView",
  components: { HeaderContainer },
};
</script>
