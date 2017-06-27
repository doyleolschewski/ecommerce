import React, { Component } from 'react'



class AddProduct extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0.00,
            description: ''
        }}

    render(){
        return(
           <form>
               <h1>Add Products</h1>

               <input type="text"  onChange={this.onNameChange}
                      value={this.onClickSave} placeholder="Name"/><br/>
               <input type="text"  onChange={this.onNameChange}
                      value={this.onClickSave} placeholder="Description"/><br/>
               <input type="text"  onChange={this.onNameChange}
                      value={this.onClickSave} placeholder="Price"/><br/>
               <input type="submit"
                      value="save"
                      onClick={this.onClickSave}/>
           </form>
        )
    }
}
export default AddProduct