import orig_order_data, { order } from '../data/order_data'
import orig_masterOrder from '../data/master_order_data'
import orig_food_data from '../data/food_data'

let [order_data, masterOrder, food_data] = [orig_order_data, orig_masterOrder, orig_food_data];

const fn = {
  'getTableOrders': (tableId) => {
    const last = masterOrder.find(i => i.completed === 0 && i.table_id === tableId)
    const orders = order_data.filter(i => i.master_order_id === last.id)
    const results = orders.map(i => {
      const food = food_data.find(j => j.foodID === i.food_id);
      return {
        orderId: i.id, 
        qty: i.quantity,
        foodName: food.foodName, 
        price: food.price * i.quantity }
    })
    return {orders: results, masterOrderId: last.id}
  },
  'deleteOrder': (orderId) => {
    const idx = order_data.findIndex(i => i.id === orderId);
    order_data.splice(idx,1)
  }
}











export default fn



