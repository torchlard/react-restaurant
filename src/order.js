import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import fn from './server/server_order'



class Order extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      orders: [],
      tableId: props.tableId,
      masterOrderId: -1,
      completed: false,
      paid: 0,
      change: 0
    }
  }

  sumPrice(){
    return this.state.orders.map(i=>i.price).reduce((i,j)=>i+j,0)
  }

  componentDidMount(){
    const {masterOrderId, orders} = fn.getTableOrders(this.state.tableId);
    this.setState({
      orders: orders,
      masterOrderId: masterOrderId
    })
  }

  deleteOrder(orderId){
    const orders = this.state.orders.filter(i => i.id != orderId);
    this.setState(state => ({orders: orders}) )
    // this.setState(state => Object.assign(state, {orders: orders}));
    fn.deleteOrder(orderId)
  }

  updateOrder(orders){
    // send added orders to server
    const invalid_orders = fn.addOrders(orders)
    if (invalid_orders.length > 0)
      return invalid_orders;

    // update local order list
    this.setState(state => {
      let orderList = state.orderList;
      orders.map(i => {
        let idx = orderList.findIndex(j => j.id === i.id);
        if (idx !== -1){
          orderList[idx].qty += i.quantity;
        } else {
          orderList.push({orderId: i.id, qty: i.quantity, 
            foodName: i.foodName, price: i.price})
        }
      })
      return {orderList: orderList};
    });
    return [];
  }

  render(){
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Price($)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((item, idx) => (
              <tr key={item.id}>
                <td>{item.foodName}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <button onClick={this.deleteOrder(item.id,idx)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total: { sumPrice() }</p>

        <Link to={`/ordering/${this.state.masterOrderId}`}>New Order</Link>

        <button onClick={}>Checkout</button>
        <button onClick={}>Revert Checkout</button>

        <p>Customer Paid: {this.state.paid}</p>
        <p>Change: {this.state.change}</p>
      </div>
    )
  }
}

class OrderEx extends PureComponent {
  constructor(props){
    this.state = {
      tableId: props.match.params.tableId,
    }
  }
}

export default Order











