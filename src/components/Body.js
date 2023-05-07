import { useState } from "react";
import { restList } from "../utils/contants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(restList)
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() =>{
          const filteredList = listOfRestaurants.filter(e=>e.avgRating>4)
          setListOfRestaurants(filteredList);
        }}>Top rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map(restaurant => <RestaurantCard restaurant={restaurant}/>)}
      </div>
    </div>
  );
};

export default Body;
