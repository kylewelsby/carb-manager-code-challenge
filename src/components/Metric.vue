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
export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ["duration"].includes(value);
      }
    },
    value: {
      type: Number
    }
  },
  computed: {
    isDuration() {
      return this.type === "duration";
    },
    formattedValue() {
      if (this.isDuration) {
        return shortEnglishHumanizer(this.value * 1000, {
          largest: 2,
          fallbacks: ["en"]
        });
      } else {
        return this.value;
      }
    },
    icon() {
      if (this.isDuration) {
        return `<svg width="18" height="18" fill="none"><path d="M9 16.667A7.667 7.667 0 109 1.333a7.667 7.667 0 000 15.334z" stroke="#6F737A" stroke-width="1.2" stroke-miterlimit="10"/><path d="M9.333 3.333v6h-4" stroke="#6F737A" stroke-width="1.2" stroke-miterlimit="10"/></svg>`;
      } else {
        return "";
      }
    },
    label() {
      if (this.isDuration) {
        return "Duration";
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
