import React, {useEffect, useState} from 'react'
import {LOAD_FOODS} from '../GraphQL/Queries'
import {useQuery} from '@apollo/client'
import "../components/style.css"

export default function ListFoods() {

    const {error, loading, data} = useQuery(LOAD_FOODS)
    const [foods, setFoods] = useState([])

    useEffect(() => {
        if(data){
            setFoods(data.foods)
        }
    }, [data])

    return (
        <div className="cont">
            {foods.map((e)=>{
                return <h1 key={e.id}>{e.name + " " + e.id}</h1>
            })

            }
        </div>
    )
}

