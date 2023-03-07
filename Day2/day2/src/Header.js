import React from "react";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoriteColor:"red"};
    }
    // static getDerivedStateFromProps(props,state){
    //     // 항상 렌더링 직전에 불러오는 메소드
    //     return{favoriteColor:props.favcol};
    
    // }
    componentDidMount(){
        setTimeout(()=>{this.setState({favoriteColor:"yellow"})},1000)
    }
    render(){
        return(
          <h1>My favorite color is {this.state.favoriteColor}</h1>
        );
    }
}
export default Header;