import React from 'react'

class CreateSightingForm extends React.Component {


  state = {
    kaijuId: "",
    location: "",
    description: ""
  }

  handleSubmitSighting = (e) => {
    e.preventDefault()
    this.setState(prevState => ({kaijuId: parseInt(prevState.kaijuId)}))
    this.props.createSighting(this.state)
  }

  handleFormChange = (e) => {
    if (e.target.name === 'kaijuId') {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
          })      
    } else {
        this.setState({
          [e.target.name]: e.target.value
        })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitSighting} id='create-sighting-form'>

        <label>Location: </label>
        <input onChange={this.handleFormChange} type='text' value={this.state.location} name="location" placeholder="add you location here.." />

        <label>Descripton: </label>
        <input onChange={this.handleFormChange} type='text' value={this.state.description} name="description" placeholder="add your description here..." />

        <label>Kaiju: </label>
        <select onChange={this.handleFormChange} name="kaijuId" value={this.state.kaijuId} >
            {this.props.kaijus.map(kaiju => <option key={kaiju.id} value={kaiju.id}>{kaiju.name} </option>)}
        </select>

        <br/>

        <input type='submit' value='Create Sighting' />

      </form>
    )
  }
}

export default CreateSightingForm
