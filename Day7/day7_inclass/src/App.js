import React, { useState} from 'react';
import Axios from 'axios';

function App() {
  const [car, setUser] = useState("");

  return (
    <div>
      <div align='left' style={{ margin: '20px' }} >
        <h2>Car Information</h2>
        <button onClick={()=>{
            Axios.post("/api/postCar").then((response) => {
              if (response.data) {
                console.log(response.data);
                setUser(response.data);
              } else {
                alert("failed to post");
              }
            });  
          }}>post mapping</button>
        <button onClick={()=>{
            Axios.get("/api/getCar").then((response)=>{
              if(response.data){
                console.log(response.data);
                setUser(response.data);
              }else{
                alert("failed to get");
              }
            });
          }}>get mapping</button>
      </div>
      <br/>
        ID: {car.id} <br />
        Brand: {car.brand} <br />
        Company: {car.company} <br />
        Price: {car.price}
    </div>
  );
}
export default App;

