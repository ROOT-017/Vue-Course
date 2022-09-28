import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton.vue";

describe("actionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        buttonText: "Clicked",
        type: "primary",
      },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch("Clicked");
  });
  it("It applies one or several styles", () => {
    const wrapper = mount(ActionButton, {
      props: {
        buttonText: "Clicked",
        type: "secondary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("secondary")).toBe(true);
  });
});
