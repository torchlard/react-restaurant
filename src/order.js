import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import fn from './server/server_order'


class Order extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      orders: [],
      tableId: props.match.params.tableId,
      masterOrderId: -1
    }
  }

  sumPrice(){
    return this.state.orders.map(i=>i.price).reduce((i,j)=>i+j,0)
  }

  componentDidMount(){
    const {masterOrderId, orders} = fn.getTableOrders(this.state.tableId);
    this.setState(state => ({
      orders: orders,
      tableId: state.tableId,
      masterOrderId: masterOrderId,
      completed: false,
      paid: 0,
      change: 0
    }))
  }

  deleteOrder(orderId){
    const orders = this.state.orders.filter(i => i.id != orderId);
    this.setState(state => Object.assign(state, {orders: orders}));
    fn.deleteOrder(orderId);
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

export default Order











