import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  select,
  object
} from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";
import imageFile from "../src/assets/low-carb-thai-curry.png";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

const RATING_GROUP = "Ratings";
const ENERGY_GROUP = "Energy";
const MACRONUTRIENT_GROUP = "Macronutrients";

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    name: {
      default: text(
        "Name",
        "Low Carb Thai Chicken Curry with Coconut Cauliflour Rice"
      )
    },
    img: {
      default: text("Image", imageFile)
    },
    tags: {
      default: object("Tags", [{ icon: "trophy", name: "Premium Recipe" }])
    },
    ratings: {
      default: {
        stars: number("Number of stars", 5, {}, RATING_GROUP),
        value: number("Rating (percent)", 50, {}, RATING_GROUP),
        count: number("Rating Count", 200, {}, RATING_GROUP)
      }
    },
    metrics: {
      default: [
        {
          type: "duration",
          value: number("Duration (seconds)", 1440)
        },
        {
          type: "energy",
          unit: select(
            "Unit",
            {
              calories: "Calories",
              joules: "Joules",
              btu: "British thermal units (BTU)",
              electronVolt: "Electron volt (eV)"
            },
            "calories",
            ENERGY_GROUP
          ),
          value: number("Value", 489, {}, ENERGY_GROUP)
        }
      ]
    },
    macronutrients: {
      default: {
        carbohydrates: number("Carbohydrates", 20, {}, MACRONUTRIENT_GROUP),
        proteins: number("Proteins", 16, {}, MACRONUTRIENT_GROUP),
        fats: number("Fats", 6, {}, MACRONUTRIENT_GROUP)
      }
    }
  },
  data: () => ({
    liked: false
  }),
  methods: {
    action: action("clicked"),
    isLiked(isLiked) {
      this.liked = isLiked;
      action("liked");
    }
  },
  template: `<PremiumRecipeCard
  @click="action"
  @liked="isLiked"
  :name="name"
  :img="img"
  :tags="tags"
  :ratings="ratings"
  :metrics="metrics"
  :macronutrients="macronutrients"
  :liked="liked"
  />`
});
