// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  // How can we show the edit form conditionally?
  state = {
    editOpen: false,
    sightingsOpen: false
  }

  handleEditClick = () => {
    this.setState(prevState => {
      return {
        editOpen: !prevState.editOpen
      }
    })
  }

  handleSightingsClick = () => {
    this.setState(prevState => {
      return {
        sightingsOpen: !prevState.sightingsOpen
      }
    })
  }



  handleDeleteClick = () => {
    this.props.deleteKaiju(this.props.kaiju)
  }

  render() {
    const { kaiju, editKaiju, sightings } = this.props
    const { name, power, image } = kaiju
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{/* Kaiju name goes here */ name }</h2>
        <h3 className='kaiju-card-power'>Power: {/* Kaiju power goes here */ power }</h3>

        <img className='kaiju-card-image' src={/* Kaiju image goes here */ image} alt={ name + power } />

        {
          this.state.sightingsOpen 
          ? 
            <div className='kaiju-card-sightings'>
              {
                sightings.length > 0 
                ? sightings.map(sighting => 
                    <div key={ sighting.id }>
                      {`${sighting.location}: ${sighting.description}`}
                    </div>)
                : "No Sightings Yet!"
                    
              }
            </div>
          :
  <p>{sightings.length} Sightings</p>
        }

        {/* What should this edit button do? */}
        {this.state.editOpen ? <EditKaijuForm { ...kaiju } editKaiju={ editKaiju } handleEditClick={ this.handleEditClick } /> : null}

        <button onClick={this.handleSightingsClick} className='kaiju-card-sightings-button'>Sightings</button>

        <button onClick={this.handleEditClick} className='kaiju-card-edit-button'>Edit</button>

        {this.state.editOpen ? <button onClick={this.handleDeleteClick} className='kaiju-card-delete-button'>Delete</button> : null}

      </div>
    )
  }
}

export default KaijuCard
