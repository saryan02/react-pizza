import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";

interface pizzaState{
    image: string,
    title: string,
    price: number
}
const FullPizza:React.FC = () => {
    const [pizza, setPizza] = useState<pizzaState>()
    const {id} = useParams();
    useEffect(() => {
        async function fetchPizza() {
            try{
                const {data} = await axios.get('https://66155949b8b8e32ffc7aad43.mockapi.io/items/' + id)
                setPizza(data)
            }catch{
                alert('Суета...')
            }
        }

        fetchPizza();
    }, []);
    console.log(pizza)
    if(!pizza)
        return <></>
    return (
        <div>
            <div className="container">
                <img src={pizza.image}/>
                    <h2>{pizza.title}</h2>
                    <h4>{pizza.price}</h4>
            </div>
        </div>
    )
}

export default FullPizza