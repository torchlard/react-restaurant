import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Food from './food'

class Ordering extends Component {
  constructor(props){
    super(props)
    this.state = {
      orderList: []
    }
  }

  addOrder(id, foodName, price){
    this.setState(state => {
      let orderList = state.orderList;
      let idx = orderList.findIndex(i => i.id === id)
      if (idx !== -1){
        orderList[idx].quantity += 1;
      } else {
        orderList.push({id: id, foodName: foodName, price: price, quantity: 1})
      }

      return orderList;
    })
  }


  render(){
    const mainLayout = {
      display: 'flex',
      flexDirection: 'row'
    } 
    const group1 = {
      flexGrow: '1'
    }

    return (
      <div style={mainLayout}>
        <div style={group1}>
          <h3>Order List</h3>    
          <p>Table No: {}</p>
          {this.orderList.map(i => (
            <div>
              <p>{i.foodName}</p>
              <span><input type="number" value={i.quantity} onChange={
                evt => this.setState(state => ({
                  orderList: state.orderList.map(j => j.id === i.id 
                    ? Object.assign(j, {quantity: i.quantity-1}) : j )
                }))
              }/></span>
              <span>${i.price*i.quantity}</span>
              <button onClick={this.setState(state => ({
                orderList: state.orderList.filter(j => j.id !== i.id)
              }) )}>X</button>
            </div>
          ))}

          <p>Total: ${this.state.orderList.reduce(
            (i,j) => i.price*i.quantity + j.price*j.quantity, 0) }</p>
          <Link to={`/order`}>Confirm</Link>
        </div>

        <Food style={group1} addOrder={addOrder} />

      </div>
    )
  }


}













