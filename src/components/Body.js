import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() => {
      const [listOfRestaurants, setListOfRestaurants] = useState([]);

      const [searchText, setSearchText] = useState("");

      const [filteredRestaurant, setFilteredRestaurant] = useState([]);

      console.log(listOfRestaurants);

      useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9709949&lng=77.6886853&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        
       // optional chaining

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };

      const onlineStatus = useOnlineStatus();

      if(onlineStatus === false) 
      return (
      <h1>
        Oopsss!!😑Looks like your'e offline... Please check your internet connection:
        
      </h1>)
     
    

    return listOfRestaurants.length === 0 ? (<Shimmer/>
     ) : (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input 
                placeholder="search "
                type="text"
                data-testid="searchInput"
                className="search-box border border-solid m-10 border-black rounded-lg"
                value = {searchText}
                onChange={(e)=> {
                  setSearchText(e.target.value);

                }}
                ></input>
                <button
                className="filter-btn px-4 py-2 bg bg-green-100 m-4 rounded-lg"
                onClick={() => {

                  const filteredRestaurant = listOfRestaurants.filter((res) => 
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );

                  setFilteredRestaurant(filteredRestaurant);

                }}

                   
                >
                  search
                </button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <button
             className="filter-btn flex px-4 py-2 bg-gray-100 rounded-lg"
             onClick = {() => {
                //filter logic
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.5
                    );
                    setFilteredRestaurant(filteredList);
                    
             }}
            >
            Top Rated Restaurants
            </button>

           </div>
           </div>
            

            <div className="res-container flex flex-wrap">
                    
            {filteredRestaurant.map((restaurant) => (
            <Link 
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}
            >
            <RestaurantCard  resData={restaurant} /></Link>
            ))}

             </div>
            

        </div>
    )
};

export default Body;