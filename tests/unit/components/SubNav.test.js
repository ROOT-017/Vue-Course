import { mount } from "@vue/test-utils";

import SubNav from "@/components/navigation/SubNav.vue";

describe("SubNav component", () => {
  describe("when user is on the jobs page", () => {
    it("display job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobResult: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on the jobs page", () => {
    it("do not display job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
