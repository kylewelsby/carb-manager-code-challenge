import { shallowMount } from "@vue/test-utils";
import Component from "../../src/components/Macronutrients.vue";

const wrapper = shallowMount(Component, {
  propsData: {
    carbohydrates: 20,
    proteins: 16,
    fats: 4
  }
});

describe("Macronutrients.vue", () => {
  it("renders grams", () => {
    expect(wrapper.text()).toMatchInlineSnapshot(`
      "20g
         
          16g
         
          4g"
    `);
  });
});
