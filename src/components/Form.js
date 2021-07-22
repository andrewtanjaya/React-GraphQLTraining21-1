import React, { useState } from 'react'
import {CREATE_FOOD, UPDATE_FOOD, DELETE_FOOD} from '../GraphQL/Mutations'
import {useMutation} from '@apollo/client'
import {LOAD_FOODS} from '../GraphQL/Queries'
import "../components/style.css"

export default function Form() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    const [createFood, {errorCreate}]= useMutation(CREATE_FOOD)
    const [updateFood, {errorUpdate}]= useMutation(UPDATE_FOOD)
    const [deleteFood, {errorDelete}]= useMutation(DELETE_FOOD)

    const addFood = () =>{
        setName("")
        createFood({
            variables:{
                name : name,
                description : description,
                price : price
            },
            refetchQueries: [{query : LOAD_FOODS}]
        })
        if(errorCreate){
            console.log(errorCreate)
        }
    }
    const upFood = () =>{
        updateFood({
            variables:{
                id: id,
                name : name,
                description : description,
                price : price
            },
            refetchQueries: [{query : LOAD_FOODS}]
        })
        if(errorUpdate){
            console.log(errorUpdate)
        }
    }

    const delFood = () =>{
        deleteFood({
            variables:{
                id: id,
            },
            refetchQueries: [{query : LOAD_FOODS}]
        })
        if(errorDelete){
            console.log(errorDelete)
        }
    }

    return (
        <div className="container">
            <input type="text" placeholder="Food ID" onChange={
                (e)=>{
                    setId(e.target.value)
                }
            }>
            </input>
            <input type="text" placeholder="Food Name" value={name} onChange={
                (e)=>{
                    setName(e.target.value)
                }
            }>
            </input>
            <input type="text" placeholder="Food Description" onChange={
                (e)=>{
                    setDescription(e.target.value)
                }
            }>
            </input>
            <input type="number" placeholder="Food Price" onChange={
                (e)=>{
                    setPrice(e.target.value)
                }
            }>
            </input>
            <button onClick={addFood}>Create Food</button>
            <button onClick={upFood} >Update Food</button>
            <button onClick={delFood} >Delete Food</button>
        </div>
    )
}
