import {gql} from '@apollo/client'

export const LOAD_FOODS = 
gql`
query getAllFoods{
    foods{
      id
      name
      description
      price
    }
  }  
`