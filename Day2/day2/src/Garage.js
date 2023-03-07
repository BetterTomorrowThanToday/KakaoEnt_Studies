import React from 'react';

function Car(props){
    return <h2>I am a {props.brand.name} {props.brand.model}!</h2>;
}

function Garage(){
    const carInfo ={name: "KIA", model:"Niro"};
    return(
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carInfo}/>
        </>
    );
}

export default Garage;