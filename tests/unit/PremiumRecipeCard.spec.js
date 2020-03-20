import { shallowMount } from "@vue/test-utils";
import Component from "@/components/PremiumRecipeCard.vue";
import Rating from "@/components/Rating.vue";
import Macronutrients from "@/components/Macronutrients.vue";
import Tag from "@/components/Tag.vue";
import Metric from "@/components/Metric.vue";

const wrapper = shallowMount(Component, {
  propsData: {
    name: "Low Carb Thai Chicken Curry with Coconut Cauliflour Rice",
    macronutrients: {
      carbohydrates: 50,
      proteins: 14,
      fats: 6
    },
    metrics: [
      { type: "duration", value: 1440 },
      { type: "energy", value: 765 }
    ],
    tags: [{ icon: "trophy", name: "premium-recipe" }]
  }
});

describe("PremiumRecipeCard.vue", () => {
  it("displays title", () => {
    expect(wrapper.find(".title")).toMatchInlineSnapshot(
      `<h4 class="title">Low Carb Thai Chicken Curry with Coconut Cauliflour Rice</h4>`
    );
  });

  it("displays a Like button", () => {
    let ref = wrapper.find("button.like");
    expect(ref.exists()).toBeTruthy();
    ref.trigger("click");
    expect(wrapper.emitted().liked[0]).toEqual([true]);
  });

  it("displays Ratings component", () => {
    expect(wrapper.find(Rating).exists()).toBeTruthy();
  });

  it("displays Metrics", () => {
    expect(wrapper.findAll(Metric).length).toEqual(2);
  });

  it("displays duration Metric", () => {
    let attrs = wrapper
      .findAll(Metric)
      .at(0)
      .attributes();
    expect(attrs).toHaveProperty("type", "duration");
    expect(attrs).toHaveProperty("value", "1440");
  });

  it("displays energy Metric", () => {
    let attrs = wrapper
      .findAll(Metric)
      .at(1)
      .attributes();
    expect(attrs).toHaveProperty("type", "energy");
    expect(attrs).toHaveProperty("value", "765");
  });

  it("displays Macronutrients component", () => {
    expect(wrapper.find(Macronutrients).exists()).toBeTruthy();
    expect(wrapper.find(Macronutrients).attributes()).toHaveProperty(
      "carbohydrates",
      "50"
    );
    expect(wrapper.find(Macronutrients).attributes()).toHaveProperty(
      "proteins",
      "14"
    );
    expect(wrapper.find(Macronutrients).attributes()).toHaveProperty(
      "fats",
      "6"
    );
  });

  it("displays Tag component", () => {
    expect(wrapper.findAll(Tag).length).toEqual(1);
    let attrs = wrapper
      .findAll(Tag)
      .at(0)
      .attributes();
    expect(attrs).toHaveProperty("icon", "trophy");
    expect(attrs).toHaveProperty("icon", "trophy");
  });
});
