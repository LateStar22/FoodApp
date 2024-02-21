// import { ShimmerPostList } from "react-shimmer-effects";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBodyfectData from "../utils/useBodyFetchData";
import { withPromotedLabel } from "./RestaurantCard";
import userContext from "../utils/userContext";
const Body = () => {
    let [restaurantsList, setRestaurantsList] = useState([]); //useState
    let [filteredListofRestaurants, setfilteredListofRestaurants] = useState([]); //useState
    let [showTopRatedRestautant, setShowTopRatedRestautant] = useState(false);
    let [searchText, setSearchText] = useState(""); // useState state variable.
    useEffect(() => { //useEffect Hook
        fetchData();
    }, []);


    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div className="onlineIndicator">
                <h1> You are offline! Check you internet!</h1>
            </div>
        )
    }

    const PromotedrestaurantCard = withPromotedLabel(RestaurantCard); //withPromotedLabel is a HOC. Always a component should be passed.
    // Essentially, a HOC is a function that takes a component and returns a new enhanced component with additional props, state, or other features.


    // Swiggy API is being hit. This is Side Effect which is triggered by useEffect.
    async function fetchData() {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7083792&lng=76.7718838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurantsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    // const [restaurantsList,filteredListofRestaurants] = useBodyfectData();

    if (!Array.isArray(restaurantsList)) {
        return <Shimmer></Shimmer>;
    }


    const { loggedInUser, setuserName } = useContext(userContext); //context api

    return restaurantsList.length === 0 ? (<Shimmer></Shimmer>)
        : (
            <div className="body">
                <div className="search-box">
                    <input type="search" placeholder="Search Restaurant" style={{ color: "black" }} value={searchText} onChange={(e) => {

                        setSearchText(e.target.value)

                    }} onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            let filteredrestaurantsList = restaurantsList.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            })
                            setfilteredListofRestaurants(filteredrestaurantsList);
                        }
                    }} data-testid="searchInput" />
                    <button type="submit" onClick={() => {
                        let filteredrestaurantsList = restaurantsList.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setfilteredListofRestaurants(filteredrestaurantsList);
                    }}>Search</button>
                </div>
                <div className="button-container">
                    <button onClick={function topRatedRestraunts() {

                        if (showTopRatedRestautant) {
                            setfilteredListofRestaurants(restaurantsList);
                        } else {
                            // Top restraunt search logic
                            let topRatedRestaurantsList = restaurantsList.filter((res) => {
                                return res.info.avgRating > 4.5
                            })
                            setfilteredListofRestaurants(topRatedRestaurantsList);
                        }
                        setShowTopRatedRestautant(!showTopRatedRestautant);
                    }}>Top Restaurants Search</button>
                    <input type="text" value={loggedInUser} onChange={(e) => {
                        setuserName(e.target.value);
                    }} />
                </div>
                <div className="res-container">
                    {
                        filteredListofRestaurants.map((res) => (
                            <Link key={res.info.id} to={"/restaurantmenu/" + res.info.id} className="link">
                                {res.info.avgRating >= 4.5 ? (<PromotedrestaurantCard resCard={res} />) : (<RestaurantCard resCard={res} />)}
                            </Link>
                        ))}
                </div>
            </div>
        )
}

export default Body;