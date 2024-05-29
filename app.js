import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// In index.js or App.js or wherever your main React component is
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";

const DropdownCategories = () => {
    // State to manage the selected category
    const [selectedCategory, setSelectedCategory] = useState('');
  
    // Function to handle category change
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  
    return (
      <div className="dropdown-container">
        <select
          className="category-dropdown" // Apply custom class for styling
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Categories</option>
          <option value="electronics">Mobiles</option>
          <option value="laptops">Laptops</option>
          <option value="tvs">TVs</option>
          <option value="cameras">Cameras</option>
          <option value="accessories">Accessories</option>
          <option value="tablets">Tablets</option>
          
        </select>
        
      </div>
    );
  };
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
      <div className="Category">
        <DropdownCategories/>
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
const Itemscard = (props) => {
 return (
    <div className="item-card">
      <img
        className="img-logo" src={props.itemimg}/>
        <h3 className="cardtext">{props.itemname}</h3>
    </div>
    
 );
};
const Body=() => {
    return (
        <div className="body">
            <div className="suggestion">
                <h2>Shop by category</h2>
            </div>
            <div className="itemscontainer">
                <Itemscard 
                  itemimg="https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png"
                  itemname="Laptops"/>
                <Itemscard
                  itemimg="https://m.media-amazon.com/images/I/71nMx5PxibL._AC_UL480_QL65_.jpg"
                  itemname="Mobiles"/>
                <Itemscard
                  itemimg="https://m.media-amazon.com/images/I/717oSOB4hCL._AC_UL480_QL65_.jpg"
                  itemname="TVs"/>
               <Itemscard
                  itemimg="https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Wearables._CB574550011_.png"
                  itemname="Accessories"/>
                  
                <Itemscard
                  itemimg="https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Cameras._CB574550011_.png"
                  itemname="Cameras"/>
                <Itemscard
                  itemimg="https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Tablets._CB574550011_.png"
                  itemname="Tablets"/>
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
    