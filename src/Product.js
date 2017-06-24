import React, { Component} from 'react'
import {graphql, gql} from 'react-apollo'

const query = gql`{
  allProducts (first:2){ 
    name
  }

}`

class Product extends Component{
    render(){

        console.log(this.props.data)
        return (<h1>

        </h1>)
    }
}

export default graphql(query)(Product)