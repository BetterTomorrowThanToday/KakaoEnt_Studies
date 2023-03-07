import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand: "Kia",
            model: "Niro",
            color: "black",
            year: "2022"
        };
    }
    changeColor=()=>{
        this.setState({color:"blue"});
    }
    render(){
        return(
            <>
                <h1>My Car</h1>
                <p>
                   It's a {this.state.color} {this.state.model} from {this.state.year} 
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}>
                        Change Color
                </button>
            </>
        );
    }
}
export default Car;