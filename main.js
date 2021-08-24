'use strict';

const $foodComparison = $('#food-comparison-container');
const $compFoodInfo = $('#comp-food-info');
const $nomFoodInfo = $('#nom-food-info');

const COMP_FOOD_DATA = {
  blueBuffaloChicken: {
    name: 'Blue Buffalo Wilderness Chicken',
    image: '...',
    protein: 99,
    fat: 44,
    carbs: 79,
    minProtein: 34,
    minFat: 15,
    calorieDensity: 3599
  }
}

const NOM_FOOD_DATA = {
  beefMash: {
    name: 'Beef Mash',
    image: '...',
    protein: 93,
    fat: 48,
    carbs: 75,
  }
}

function loadData() {
  console.log("Ran");
  for(let product in COMP_FOOD_DATA) {
    $(`<option value=${COMP_FOOD_DATA[product]}> ${COMP_FOOD_DATA[product].name} </option>`).appendTo('#comp-product');
  }
}

loadData();
