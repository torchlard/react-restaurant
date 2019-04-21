import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Ordering extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: ["Burger", "Pizza", "Sides", "Chicken", "Drinks", "Deserts"],
      foods: [],
      filterCat: 'Burger'
    }
  }



  render(){
    return (
      <div>
        <ul>
          {this.state.category(i => (
            <li><button onClick={() => {
              this.setState(state => )
            }}>{i}</button></li>
          )) }
        </ul>
        <table>
          <thead>
            <th>Food Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            {this.state.foods.filter(i => i.category === this.state.filterCat).map(
              i => (
                <tr key={i.foodID}>
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













