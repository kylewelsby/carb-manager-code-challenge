import { shallowMount } from "@vue/test-utils";
import Component from "../../src/components/Metric.vue";

const wrapper = shallowMount(Component, {
  propsData: {
    type: "duration"
  }
});

describe("Metric.vue", () => {
  describe("type: duration", () => {
    beforeEach(() => {
      wrapper.setProps({
        type: "duration",
        value: 1440
      });
    });

    it("displays hours minutes seconds", () => {
      expect(wrapper.vm.formattedValue).toMatchInlineSnapshot(`"24 min"`);
      wrapper.setProps({
        type: "duration",
        value: 3600
      });
      expect(wrapper.vm.formattedValue).toMatchInlineSnapshot(`"1 hr"`);
    });

    it("displays the SVG icon", () => {
      expect(wrapper.html()).toMatchInlineSnapshot(`
        <div title="Duration" class="metric"><i class="icon"><svg width="18" height="18" fill="none">
              <path d="M9 16.667A7.667 7.667 0 109 1.333a7.667 7.667 0 000 15.334z" stroke="#6F737A" stroke-width="1.2" stroke-miterlimit="10"></path>
              <path d="M9.333 3.333v6h-4" stroke="#6F737A" stroke-width="1.2" stroke-miterlimit="10"></path>
            </svg></i>
          24 min
        </div>
      `);
    });
  });
});
