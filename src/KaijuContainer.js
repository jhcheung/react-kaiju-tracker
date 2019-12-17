//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import CreateSightingForm from './CreateSightingForm'

import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    sightings: [],
    createKaijuFormOpen: false,
    createSightingFormOpen: false
  }

  componentDidMount() {
    requests.fetchKaijus()
      .then(kaijus => this.setState({ kaijus: kaijus }))
    requests.fetchSightings()
      .then(sightings => this.setState({ sightings: sightings }))
  }

  createKaiju = (newKaiju) => {
    requests.createKaiju(newKaiju)
      .then(resp => {
        if (resp && resp.id) { 
        this.setState(prevState => ({ kaijus: [...prevState.kaijus, resp]}))
      }})    
  }

  createSighting = (newSighting) => {
    requests.createSighting(newSighting)
      .then(resp => {
        if (resp && resp.id) { 
        this.setState(prevState => ({ sightings: [...prevState.sightings, resp]}))
      }})    
  }


  editKaiju = (modKaiju) => {
    requests.editKaiju(modKaiju)
      .then(resp => {
        if (resp.id && resp.id === modKaiju.id) { 
          this.setState(prevState => ({ 
            kaijus: prevState.kaijus.map(
              kaiju => kaiju.id === modKaiju.id ? modKaiju : kaiju)
          }))
      }}) 
  }

  deleteKaiju = (delKaiju) => {
    requests.deleteKaiju(delKaiju)
      .then(resp => {
        if (Object.keys(resp).length === 0) {
          this.setState(prevState => {
            return {
              kaijus: prevState.kaijus.filter(kaiju => kaiju !== delKaiju)
            }
          })
        }
      })
  }

  handleButtonClick = (e) => {
    let stateKey = e.target.name
    this.setState(prevState => {
      return {
        [stateKey]: !prevState[stateKey]
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <button name="createKaijuFormOpen" onClick={this.handleButtonClick}>Add a new Kaiju!</button>
        { this.state.createKaijuFormOpen ? <CreateKaijuForm createKaiju={ this.createKaiju} /> : null }

        <br /><button name="createSightingFormOpen" onClick={this.handleButtonClick}>Add a new Sighting!</button>
        { this.state.createSightingFormOpen ? <CreateSightingForm createSighting={ this.createSighting } kaijus={this.state.kaijus} /> : null }

        <div id='kaiju-container'>

          {/* Kaiju cards should go in here! */}
          { this.state.kaijus.map(kaiju => 
              <KaijuCard kaiju={ kaiju } 
                key={ kaiju.id } 
                editKaiju={ this.editKaiju } 
                deleteKaiju={ this.deleteKaiju } 
                sightings={ this.state.sightings.filter(sighting => sighting.kaijuId === kaiju.id) } 
              />)
          }

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
