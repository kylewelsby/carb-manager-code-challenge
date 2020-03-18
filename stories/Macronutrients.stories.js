import Macronutrients from "../src/components/Macronutrients.vue";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "Macronutrients",
  component: Macronutrients,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Macronutrients },
  props: {
    carbohydrates: {
      default: number("Carbohydrates (percent)", 20)
    },
    proteins: {
      default: number("Proteins (percent)", 16)
    },
    fats: {
      default: number("Fats (percent)", 6)
    }
  },
  template: `<Macronutrients 
    :calories="calories"
    :carbohydrates="carbohydrates"
    :proteins="proteins"
    :fats="fats"
  />`
});
