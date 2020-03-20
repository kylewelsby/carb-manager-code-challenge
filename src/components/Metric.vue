<template>
  <div class="metric" :title="label">
    <i class="icon" v-html="icon" />
    {{ formattedValue }}
  </div>
</template>

<script>
import humanizeDuration from "humanize-duration";
const shortEnglishHumanizer = humanizeDuration.humanizer({
  language: "shortEn",
  languages: {
    shortEn: {
      y: () => "yr",
      mo: () => "mo",
      w: () => "wk",
      d: () => "day",
      h: () => "hr",
      m: () => "min",
      s: () => "sec",
      ms: () => "ms"
    }
  }
});

const humanizeEnergyI18n = {
  en: {
    calories: "Calories",
    kilojoules: "kJ"
  },
  fr: {
    calories: "Calories",
    kilojoules: "kJ"
  },
  de: {
    calories: "Kalorien",
    kilojoules: "kJ"
  },
  jp: {
    calories: "カロリー",
    kilojoules: "kJ"
  },
  es: {
    calories: "Calorías",
    kilojoules: "kJ"
  },
  zh: {
    calories: "卡路里",
    kilojoules: "千焦耳"
  }
};

const humanizeEnergy = (value, options = {}) => {
  if (options.unit === "kilojoules") {
    value = value * 4.184;
  }
  let formattedNumber = new Intl.NumberFormat().format(Math.ceil(value));
  let lang = navigator.language.split("-")[0] || "en";
  if (!Object.keys(humanizeEnergyI18n).includes(lang)) {
    lang = "en";
  }
  let unit = humanizeEnergyI18n[lang][options.unit || "calories"];
  return formattedNumber + " " + unit;
};

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["duration", "energy"].includes(value);
      }
    },
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String
    }
  },
  computed: {
    isDuration() {
      return this.type === "duration";
    },
    isEnergy() {
      return this.type === "energy";
    },
    formattedValue() {
      if (this.isDuration) {
        return shortEnglishHumanizer(this.value * 1000, {
          largest: 2,
          fallbacks: ["en"]
        });
      } else if (this.isEnergy) {
        return humanizeEnergy(this.value, { unit: this.unit });
      } else {
        return this.value;
      }
    },
    icon() {
      if (this.isDuration) {
        return `<svg width="18" height="18" fill="none"><path d="M9 16.667A7.667 7.667 0 109 1.333a7.667 7.667 0 000 15.334z" stroke="#6F737A" stroke-width="1.2" stroke-miterlimit="10"/><path d="M9.333 3.333v6h-4" stroke="#6F737A" stroke-width="1.2" stroke-miterlimit="10"/></svg>`;
      } else if (this.isEnergy) {
        return `<svg width="12" height="16" fill="none"><path d="M7.267.224a.835.835 0 00-.956-.129.86.86 0 00-.459.88c.193 1.538-.225 3.123-1.118 4.239a1.08 1.08 0 01-.151.16c-.052-.077-.14-.251-.25-.641-.126-.433-.13-1.095-.13-1.102a.452.452 0 00-.796-.293c-.055.063-1.33 1.56-1.732 2.176-1.572 2.414-2.03 4.56-1.405 6.56C1.002 14.413 3.288 16 5.88 16c.078 0 .158-.002.237-.005 2.872-.107 5.238-2.168 5.753-5.013.636-3.522-1.085-7.544-4.603-10.758zm3.711 10.597c-.438 2.423-2.451 4.179-4.895 4.27-2.286.092-4.317-1.267-4.95-3.286-.54-1.728-.115-3.624 1.301-5.797.186-.285.602-.807.972-1.257.016.08.035.158.056.232.16.557.37 1.097.81 1.275.267.11.691.116 1.168-.478C6.473 4.489 6.953 2.752 6.766.993c3.214 2.986 4.787 6.65 4.212 9.828z" fill="#6F737A"/></svg>`;
      } else {
        return "";
      }
    },
    label() {
      if (this.isDuration) {
        return "Duration";
      } else if (this.isEnergy) {
        return "Calories";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
>>> {
  --margin-size: 0.375rem;
}

.metric {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 400;
  font-style: normal;
  font-family: var(--font-primary);
  color: var(--color-text-primary, #393c40);
}

.icon {
  line-height: 0;
  margin-right: var(--margin-size);
}
</style>
