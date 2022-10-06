<template>
  <AccordionVue header="">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input type="checkbox" id="VueTube" mr="3" />
            <label for="VueTube">VueTube</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </AccordionVue>
</template>

<script>
import AccordionVue from "@/shared/AccordionVue.vue";
export default {
  name: "JobFilterSideBarOrganisation",
  components: {
    AccordionVue,
  },
};
</script>
