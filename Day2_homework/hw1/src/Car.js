import React from "react";

function Car(props) {
    return(
        <li style={{fontSize:"2rem", listStyleType:"none"}}> 
            <span style={{display:"inline-block",width:"3rem"}}>[{props.id}]</span> 
            <span style={{display:"inline-block",width:"11rem"}}>{props.name}</span> 
            <span style={{display:"inline-block",width:"8rem"}}>{props.price}</span> 
            <span style={{display:"inline-block",width:"40rem"}}>{props.desc}</span>
        </li>
    )
}

export default function Garage() {
    const cars = [
        {
            id: 1,
            name: "Audi",
            price: "1억3천",
            description: "Ironman road this"
        },
        {
            id: 2,
            name: "BMW",
            price: "1억",
            description: "German Technology!"
        },
        {
            id: 3,
            name: "Grandeur",
            price: "8천",
            description: "Ego sal baen don boteseo BMW buy~"
        },
        {
            id: 4,
            name: "Lamborgini",
            price: "15억",
            description: "Everybody's dream car"
        },
        {
            id: 5,
            name: "Ferrari",
            price: "20억",
            description: "Red is for selected people"
        }
    ];
    return(
        <>
            <ul>
                {cars.map((a) => <Car key={a.id} id = {a.id} name={a.name} price = {a.price} desc = {a.description}/>)}
            </ul>
        </> 
    );
}
