import React from 'react'

class EditKaijuForm extends React.Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    power: this.props.power,
    image: this.props.image
  }

  handleUpdateKaiju = (e) => {
    e.preventDefault()
    this.props.editKaiju(this.state)
    this.props.handleEditClick()
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleUpdateKaiju} className='kaiju-card-edit-form'>

          <label>Name: </label>
          <input onChange={ this.handleFormChange } name="name" value={this.state.name} type='text' />
          <br/>

          <label>Power: </label>
          <input onChange={ this.handleFormChange } name="power" value={this.state.power} type='text' />
          <br/>

          <label>Image URL: </label>
          <input onChange={ this.handleFormChange } name="image" value={this.state.image} type='text' />
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
