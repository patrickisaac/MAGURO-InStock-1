import React from 'react'
import InventoryTable from './InventoryTable'
import '../Styles/Inventory/styles.css'
import InventoryNewItem from './InventoryNewItem'
import axios from 'axios'

const url = 'http://localhost:8080/inventory'

class Inventory extends React.Component {
  state = {
    inventory: []
  }

  getInventory = () => {
    axios.get(url).then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }

  componentDidMount() {
    this.getInventory()
  }

  removeItem = id => {
    axios.delete(`http://localhost:8080/inventory/${id}`).then(() => {
      return this.getInventory()
    })
  }

  render() {
    return (
      <div className='inventory__container'>
        <div className='inventory__container-header'>
          <h1>Inventory</h1>
          <input type='text' placeholder='Search' className='inventory__search' alt='search' />
        </div>
        <InventoryTable
          inventory={this.state.inventory}
          getInventory={this.getInventory}
          removeItem={this.removeItem}
        />
        <InventoryNewItem />
      </div>
    )
  }
}
export default Inventory
