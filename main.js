'use strict';

const $foodComparison = $('#food-comparison-container');
const $compFoodInfo = $('#comp-food-info');
const $nomFoodInfo = $('#nom-food-info');

const COMP_FOOD_DATA = {
  blueBuffaloChicken: {
    name: 'Blue Buffalo Wilderness Chicken',
    image: 'https://www.nomnomnow.com/images/brands/blue_buffalo_chicken.jpg',
    protein: 99,
    fat: 44,
    carbs: 79,
  },
  earthbornHolisticAdultVantage: {
    name: 'Earthborn Holistic Adult Vantage',
    image:'https://www.nomnomnow.com/images/brands/earthborn_holistic.jpg' ,
    protein: 67,
    fat: 37,
    carbs: 129
  },
  frommFamilyGoldHolistic: {
    name: 'Fromm Family Gold Holistic',
    image: 'https://www.nomnomnow.com/images/brands/fromm_family.jpg',
    protein: 71,
    fat: 46,
    carbs: 104
  }

}

const NOM_FOOD_DATA = {
  beefMash: {
    name: 'Beef Mash',
    image: 'https://www.nomnomnow.com/images/recipes/bowl_beef_square.png',
    protein: 93,
    fat: 48,
    carbs: 75,
  }
}

function generateMarkUp(product) {
  return $(`
    <div>
      <h3>Protein: ${product.protein} </h3>
      <h3>Protein: ${product.fat} </h3>
      <h3>Protein: ${product.carbs} </h3>
    </div>
  `);
}

function loadInitialData() {

  for (let product in COMP_FOOD_DATA) {
    $(`<option value=${product}> ${COMP_FOOD_DATA[product].name} </option>`).appendTo('#comp-product');
  }

  for (let product in NOM_FOOD_DATA) {
    $(`<option value=${product}> ${NOM_FOOD_DATA[product].name} </option>`).appendTo('#nom-nom-product');
  }

}

function showComparison() {
  $('#comp-food-info').empty()
  $('#nom-food-info').empty()

  const compSelection = $('#comp-product option:selected').val()
  const compFoodData = COMP_FOOD_DATA[compSelection];
  const $compFoodMarkUp = generateMarkUp(compFoodData);
  $compFoodInfo.append($compFoodMarkUp);

  const nomSelection = $('#nom-nom-product option:selected').val()
  const nomFoodData = NOM_FOOD_DATA[nomSelection];
  const $nomFoodMarkUp = generateMarkUp(nomFoodData);
  $nomFoodInfo.append($nomFoodMarkUp);

  $foodComparison.show();
}

$('#comp-product').change(showComparison);
$('#nom-nom-product').change(showComparison);

loadInitialData();
