import orig_food_data from '../data/food_data'

let food_data = orig_food_data
// foodID, foodName, price, quantity, category


const fn = {
  'getFood': () => food_data,
  'setFood': foods => food_data = foods,
  // 'consumeFood': 
}

export default fn;









