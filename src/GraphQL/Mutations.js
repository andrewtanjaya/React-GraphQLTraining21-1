import {gql} from '@apollo/client'

export const CREATE_FOOD = 
gql`
mutation insertNewFood(
    $name : String!, 
    $description: String!, 
    $price : Int!)
    {
    createFood(
    input:{
      name : $name, 
      description: $description, 
      price : $price
    })
    {
      name,
      price
    }
  }
`
export const UPDATE_FOOD = 
gql`
mutation updateFood (
    $id : ID!,
    $name : String!,
    $description : String!,
    $price : Int!
){
    updateFood(id : $id, 
    input:{
      name : $name, 
      description: $description, 
      price : $price}
    ){
      name
      description
    }
  }
`
export const DELETE_FOOD = 
gql`
mutation deleteFood ($id : ID!){
    deleteFood(id : $id)
  }
`