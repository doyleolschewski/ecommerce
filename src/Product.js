import React, { Component} from 'react'
import {graphql, gql} from 'react-apollo'
import AddProduct from './AddProduct'


export const query = gql`{
  allProducts { 
    id
    name
  }

}`

class Product extends Component{
    render(){

        let { data: { allProducts } } = this.props;
        allProducts = (allProducts) ? allProducts : [];
        console.log(allProducts)
        return(
            <div>
            <ul>
                {allProducts.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
               <AddProduct/>
            </div>
        )


    }
}

export default graphql(query)(Product)