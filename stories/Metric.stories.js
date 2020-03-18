import Metric from "../src/components/Metric.vue";
import { withKnobs, select, number } from "@storybook/addon-knobs";

export default {
  title: "Metric",
  component: Metric,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Metric },
  props: {
    type: {
      default: select(
        "Type",
        { Duration: "duration", Calories: "energy" },
        "duration"
      )
    },
    value: {
      default: number("Value", 1440)
    },
    unit: {
      default: select(
        "Unit",
        {
          Calories: "calories",
          Kilojoules: "kilojoules"
        },
        "calories"
      )
    }
  },
  template: `<Metric
    :type="type"
    :value="value"
    :unit="unit"
  />`
});
