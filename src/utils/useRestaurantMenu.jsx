import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {  //it is a custom hook
    const [menuData, setMenuData] = useState([]);
    //Fetching data:
    useEffect(() => {
        fetchRestroDetails();
    },[restaurantId])

    const fetchRestroDetails = async () => {
        try {
            // setLoading(true); 
            const dataMenuItem = await fetch(MENU_URL + restaurantId);
            const json_menu_item = await dataMenuItem.json();
            setMenuData(json_menu_item.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return menuData;
}

export default useRestaurantMenu;