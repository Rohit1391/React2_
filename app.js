import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const Header=() => {
return <div className="Header">
    <div className="logo-container">
        <img className="logo" src="https://pickystory.com/wp-content/uploads/2022/08/advantages-of-ecommerce-shopping-cart.png"/>
    </div>
    <div className="Nav-items">
        <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
    </div>
</div>
}
const Body=() => {
    return (
        <div className="body"></div>
        
    )
    
}
const AppLayout=() =>{
    return <div className="app">
        <Header/>
    </div>
}

            
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    