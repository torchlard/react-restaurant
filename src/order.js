import React, {PureComponent} from 'react'

class Order extends PureComponent {
  render(){
    return (
      <div>
        My Order is with id
        {this.props.id}
      </div>
    )
  }
}

export default Order










