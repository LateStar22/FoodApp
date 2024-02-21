import { useEffect, useState } from "react";

const useBodyfetchData = () => {

    let [restaurantsList_1, setRestaurantsList] = useState([]); //useState
    let [filteredListofRestaurants_1, setfilteredListofRestaurants] = useState([]); //useState
    useEffect(() => {
        fetchData();
    }, []);


    async function fetchData() {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7083792&lng=76.7718838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return [restaurantsList_1,filteredListofRestaurants_1];
}

export default useBodyfetchData;