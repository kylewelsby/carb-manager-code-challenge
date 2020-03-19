<template>
  <div class="rating">
    <div class="stars">
      <svg
        v-for="(n, index) in stars"
        :key="index"
        class="star"
        width="12"
        height="12"
        fill="none"
        :style="{ fill: `url(#gradient${n})` }"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.077 9.644L9.737 12l-.971-4.44L12 4.573l-4.259-.386L6.077 0 4.413 4.187l-4.26.386L3.389 7.56 2.416 12l3.66-2.356z"
        />
        <defs>
          <linearGradient :id="`gradient${n}`">
            <stop
              id="stop1"
              :offset="starFillPercent(index)"
              stop-opacity="1"
            ></stop>
            <stop
              id="stop2"
              :offset="starFillPercent(index)"
              stop-opacity="1"
            ></stop>
            <stop
              id="stop3"
              :offset="starFillPercent(index)"
              stop-opacity="1"
            ></stop>
            <stop id="stop4" offset="100%" stop-opacity="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="count" v-if="count">{{ count }} ratings</div>
  </div>
</template>

<script>
/**
 * @todo I18n Support
 */
export default {
  props: {
    stars: {
      type: Number,
      default: 5
    },
    value: {
      type: Number
    },
    count: {
      type: Number
    }
  },
  methods: {
    starFillPercent(index) {
      let portionPerStar = 100 / this.stars;
      let starMaxValue = portionPerStar * (index + 1);
      if (starMaxValue < this.value) {
        return "100%";
      } else if (starMaxValue - portionPerStar >= this.value) {
        return "0%";
      } else {
        let fillPercent =
          100 - ((starMaxValue - this.value) * 100) / portionPerStar;
        return `${fillPercent}%`;
      }
    }
  }
};
</script>

<style scoped>
.rating {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.stars {
  display: flex;
  line-height: 0;
  margin-bottom: 3px;
}

.star {
  padding-left: 2px;
}

.star stop {
  stop-color: #ccced1;
}

.star stop#stop1,
.star stop#stop2 {
  stop-color: #fda01e;
}

.star:first-child {
  padding-left: 0;
}

.count {
  color: #1ca677;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  margin-left: 8px;
}
</style>
