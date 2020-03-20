<template>
  <div class="card" @click="$emit('click')">
    <div class="hero">
      <div class="pic-wrapper">
        <img class="pic" :src="img" />
      </div>
      <button
        ref="like"
        type="button"
        title="Like"
        class="like"
        :class="{ active: liked }"
        @click="toggleLike()"
      >
        <svg width="25" height="22" viewBox="0 0 25 22" fill="none">
          <path
            d="M17.9 1C16.7871 1.00014 15.6956 1.30496 14.7437 1.8814C13.7917 2.45785 13.0158 3.28391 12.5 4.27C11.8662 3.06378 10.8469 2.10448 9.60443 1.54506C8.36198 0.985631 6.96801 0.858295 5.64477 1.18335C4.32154 1.50841 3.14523 2.26714 2.30341 3.33857C1.46159 4.41 1.00273 5.73243 1 7.095C1 10.46 3.09 13.535 5.79 16.06C7.87296 17.9058 10.1188 19.5593 12.5 21C14.8633 19.5327 17.107 17.8809 19.21 16.06C22.21 13.32 24 10.46 24 7.095C24 6.29417 23.8422 5.5012 23.5356 4.76139C23.229 4.02159 22.7796 3.34946 22.213 2.78342C21.6465 2.21738 20.974 1.76853 20.234 1.46252C19.4939 1.15651 18.7008 0.999345 17.9 1V1Z"
            stroke-miterlimit="10"
          />
        </svg>
      </button>
      <div class="tags">
        <Tag
          v-for="(tag, index) in tags"
          :key="index"
          :icon="tag.icon"
          :name="tag.name"
        />
      </div>
    </div>
    <div class="body">
      <h4 class="title" v-text="name" />
      <Rating
        :stars="ratings.stars"
        :value="ratings.value"
        :count="ratings.count"
      />
      <div class="metrics">
        <Metric
          :type="metric.type"
          :value="metric.value"
          :unit="metric.unit"
          v-for="metric in metrics"
          :key="metric.type"
        />
        <span class="spacer" />
        <Macronutrients
          :carbohydrates="macronutrients.carbohydrates"
          :proteins="macronutrients.proteins"
          :fats="macronutrients.fats"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Metric from "./Metric.vue";
import Macronutrients from "./Macronutrients.vue";
import Rating from "./Rating.vue";
import Tag from "./Tag.vue";
export default {
  components: {
    Metric,
    Macronutrients,
    Rating,
    Tag
  },
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    tags: {
      type: Array,
      default: () => ({})
    },
    ratings: {
      type: Object,
      default: () => ({
        type: "star"
      })
    },
    metrics: {
      type: Array,
      default: () => []
    },
    macronutrients: {
      type: Object,
      default: () => ({})
    },
    liked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleLike() {
      this.$emit("liked", !this.liked);
    }
  }
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.75rem;
  max-width: 343px;
  height: 318px;
  box-shadow: 0 0.8125rem 2.1875rem rgba(0, 30, 47, 0.1);
  cursor: pointer;
}

.card:hover .pic-wrapper::after {
  background: rgba(255, 255, 255, 0.2);
}

.hero {
  flex: 1;
  height: 200px;
  position: relative;
}

.body {
  padding: 1rem;
  padding-top: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.like {
  appearance: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: 0;
  padding: 1rem;
  margin: 0;
  cursor: pointer;
}

.like svg {
  stroke-width: 1.5;
  stroke: #fff;
  fill: rgba(28, 166, 119, 0);
  fill-opacity: 0;
  transition-property: fill, fill-opacity, stroke-width;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
}

.like:hover svg,
.like.active svg {
  fill: var(--color-text-success-hover, #1bc98e);
  fill-opacity: 1;
}

.like:active svg,
.like.active svg {
  stroke-width: 0;
  fill: var(--color-text-success, #1bc98e);
}

.pic-wrapper {
  line-height: 0;
}

.pic-wrapper::after,
.pic-wrapper::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: 125ms;
}

.pic-wrapper::before {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 100%
  );
}

.pic {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tags {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
}

.title {
  flex: 1;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  font-style: normal;
  line-height: 20px;
  color: var(--color-text-heading, #0c0c0a);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 2.5rem;
}

.metrics {
  margin-top: 0.5625rem;
  display: flex;
  flex-wrap: wrap;
}

.metrics .metric {
  margin-left: 1rem;
}

.metrics .metric:first-child {
  margin-left: 0;
}

.metrics .spacer {
  flex: 1;
}
</style>
