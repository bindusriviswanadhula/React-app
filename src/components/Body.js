import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS_URL } from "../utils/constants";

const Body =() => {
      const [listOfRestaurants, setListOfRestaurants] = useState([]);

      const [searchText, setSearchText] = useState("");

      const [filteredRestaurant, setFilteredRestaurant] = useState([]);

      console.log(listOfRestaurants);

      useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);

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
        
      </h1>
      )
     
    

    return listOfRestaurants.length === 0 ? (<Shimmer/>
     ) : (
        <div className="body">
            <div className="filter flex flex-wrap items-center justify-center 2xl:m-4 2xl:p-4 2xl:text-xl">
              <div className="search m-4 py-4 flex items-center 2xl:w-6/12">
                <input 
                placeholder="search your favourite's "
                type="text"
                data-testid="searchInput"
                className="search-box border border-solid border-black rounded-md "
                value = {searchText}
                onChange={(e)=> {
                  setSearchText(e.target.value);

                }}
                ></input>
                <button
                className="filter-btn px-2 py-1 bg bg-orange-300 rounded-lg  mx-2 font-medium "
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
              <div className="search p-4 2xl:w-5/12">
                <button
                 className="filter-btn px-4 py-2 bg-gray-200 rounded-lg font-medium "
                 onClick = {() => {
                //filter logic
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.2
                    );
                    setFilteredRestaurant(filteredList);
                    
             }}
            >
            Top Rated Restaurants
            </button>

           </div>
           </div>
            

            <div className="res-container flex flex-wrap justify-center items-center">
                    
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