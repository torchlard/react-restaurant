import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fn from './server/server_food'

class Food extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: ['All',"Burger", "Pizza", "Sides", "Chicken", "Drinks", "Deserts"],
      foods: fn.getFood(),
      fCategory: 'Burger',
      fFoodName: '',
      fLowPrice: -1,
      fHighPrice: -1
    }
  }



  render(){

    const filterLayout = {
      display: 'flex',
      flexDirection: 'row'
    }
    
    return (
      
      <div>
        <ul>
          {this.state.category(i => (
            <li><button onClick={() => this.setState({fCategory: i})}>{i}</button></li>
          )) }
        </ul>

        <form style={filterLayout}>
          <label>Name
            <input type="text" name="foodName"
              onChange={evt => this.setState({fFoodName: evt.target.value})} />
          </label>
          <label>Price
            <input type="number" name="lowPrice" 
              onChange={evt => this.setState({fLowPrice: evt.target.value})}  /> -
            <input type="number" name="highPrice"
              onChange={evt => this.setState({fHighPrice: evt.target.value})} />
          </label>
        </form>

        <table>
          <thead>
            <th>Food Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            {this.state.foods.filter(i => 
                (this.state.fCategory==='All' ? i : i.category===this.state.fCategory) &&
                (this.state.fName==='' ? i : i.foodName===this.state.fFoodName) &&
                (this.state.fLowPrice === -1 ? i : i.price >= this.state.fLowPrice) &&
                (this.state.fHighPrice === -1 ? i : i.price <= this.state.fHighPrice)
              ).map(
                i => (
                  <tr key={i.foodID} onClick={() => this.props.addOrder(i.foodName, i.price) } >
                    <td>{i.foodName}</td>
                    <td>{i.price}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>

)
  }


}


export default Food










