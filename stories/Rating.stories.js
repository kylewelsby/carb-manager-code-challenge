import Rating from "../src/components/Rating.vue";
import { withKnobs, select, number } from "@storybook/addon-knobs";

export default {
  title: "Rating",
  component: Rating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Rating },
  props: {
    value: {
      default: number("Value (0-100)", 70)
    },
    count: {
      default: number("Review Count", 200)
    }
  },
  template: `<Rating
  :value="value"
  :count="count"
  />`
});
