import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// In index.js or App.js or wherever your main React component is
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header=() => {
return <div className="Header">
    <div className="logo-container">
        <img className="logo" src="https://pickystory.com/wp-content/uploads/2022/08/advantages-of-ecommerce-shopping-cart.png"/>
    </div>
    <div className="slogan">
        <h1>Your electro-hub is here !</h1>
    </div>
    <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search your gadgets..."
        />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
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
};
const Itemscard = () => {
 return (
    <div className="item-card">
        <h3>Computers</h3>
    </div>
 );
};
const Body=() => {
    return (
        <div className="body">
            <div className="itemscontainer">
                <Itemscard/>
            </div>
        </div>

    );
    
};
const AppLayout=() =>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}

            
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    