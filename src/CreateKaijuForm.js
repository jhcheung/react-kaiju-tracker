import React from 'react'

class CreateKaijuForm extends React.Component {


  state = {
    name: "",
    power: "",
    image: ""
  }

  handleSubmitKaiju = (e) => {
    e.preventDefault()
    this.props.createKaiju(this.state)
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitKaiju} id='create-kaiju-form'>

        <label>Name: </label>
        <input onChange={this.handleFormChange} type='text' value={this.state.name} name="name" placeholder="add your name here.." />

        <label>Power: </label>
        <input onChange={this.handleFormChange} type='text' value={this.state.power} name="power" placeholder="add your power here..." />

        <label>Image: </label>
        <input onChange={this.handleFormChange} type='text' value={this.state.image} name="image" placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
