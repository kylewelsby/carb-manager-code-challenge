<template>
  <div class="macronutrients">
    <span class="macronutrient carbohydrate">
      {{ carbohydrates | formattedUnit }}
    </span>
    <span class="macronutrient protein">
      {{ proteins | formattedUnit }}
    </span>
    <span class="macronutrient fat">
      {{ fats | formattedUnit }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Macronutrients",
  props: {
    carbohydrates: {
      type: Number
    },
    proteins: {
      type: Number
    },
    fats: {
      type: Number
    }
  },
  filters: {
    formattedUnit(val) {
      return new Intl.NumberFormat().format(val) + "g";
    }
  }
};
</script>

<style scoped>
>>> {
  --dot-size: 0.375rem;
}
.macronutrients {
  display: flex;
}

.macronutrient::before {
  content: " ";
  background-color: #888;
  height: var(--dot-size);
  width: var(--dot-size);
  border-radius: var(--dot-size);
  margin-right: calc(var(--dot-size) - 2px);
}

.macronutrient {
  margin-left: var(--dot-size);
  font-size: 0.75rem;
  font-family: var(--font-primary);
  font-weight: 400;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-primary, #393c40);
}

.carbohydrate::before {
  background-color: #f94642;
}

.protein::before {
  background-color: #3177bb;
}

.fat::before {
  background-color: #fda120;
}
</style>
