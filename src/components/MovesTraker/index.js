import {Component} from 'react'
import Navigation from '../Navigation'
import MovesItem from '../MovesItem'

import './index.css'

class MovesTraker extends Component {
  state = {
    movesList: [],
  }

  componentDidMount() {
    this.getMovesList()
  }

  getMovesList = async () => {
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.Customer_Estimate_Flow)
    const formattedData = data.Customer_Estimate_Flow.map(eachItem => ({
      customStatus: eachItem.custom_status,
      dateCreated: eachItem.date_created,
      distance: eachItem.distance,
      estimateId: eachItem.estimate_id,
      movingFrom: eachItem.moving_from,
      movingTo: eachItem.moving_to,
      propertySize: eachItem.property_size,
      totalItems: eachItem.total_items,
    }))

    this.setState({
      movesList: formattedData,
    })
  }

  expandDetails = estimateId => {}

  render() {
    const {movesList} = this.state
    console.log(movesList)
    return (
      <div className="main-bg-container">
        <div className="nav-cotainer">
          <Navigation />
        </div>
        <div className="my-moves-container">
          <h1>My Moves</h1>
          <ul className="moves-container">
            {movesList.map(eachMove => (
              <MovesItem
                moveDetails={eachMove}
                key={eachMove.estimateId}
                expandDetail={this.expandDetails}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MovesTraker
