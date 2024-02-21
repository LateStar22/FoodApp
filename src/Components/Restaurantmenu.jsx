
import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    let { restaurantId } = useParams();
    const resMenu = useRestaurantMenu(restaurantId);  //useRestaurantMenu is custom hook.
    const [showIndex, setShowIndex] = useState(null); // Initialize showIndex with null

    let categories = [];
    if (resMenu && resMenu.length !== 0) {
        categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card["@type"].includes("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        console.log("Categories", categories);
    } else {
        console.log("Iam stuck in pushing data in categories");
    }

    if (!resMenu || resMenu.length === 0 || categories === undefined) {
        return <ShimmerMenu />;
    } else {
        const { name: restaurantName, cuisines, costForTwo, avgRating, city, locality, areaName } = resMenu?.cards[2]?.card?.card?.info;

        return (
            <div className="menu">
                <h1>{restaurantName}</h1>
                <h2>{city}</h2>
                <h3>{locality}</h3>
                <h3>{areaName}</h3>
                <h3>Cost for two : {costForTwo / 100}</h3>
                <h3>Cuisines : {cuisines}</h3>
                <h2>Menu:</h2>
                {categories.map((c, index) => {
                    const itemCardsNew = c.card.card.itemCards;
                    return (
                        <RestaurantCategory
                            data={itemCardsNew}
                            title={c.card.card.title}
                            key={c.card.card.id}
                            abcd={() => {
                                setShowIndex(prevIndex => prevIndex === index ? null : index)
                            }} // Toggle showIndex
                            showItems={index === showIndex} // Check if the current index matches showIndex
                        />
                    )
                })}
                <h4>{avgRating}</h4>
            </div>
        );
    }
};

export default RestaurantMenu;


// Question: Why already opened RestaurantCategory gets closed as soon as other category opens?
//Answer : const [showIndex, setShowIndex] = useState([]); is the state variable of Restaurantmenu, 
// as soon as this state Variable updates, RestaurantMenu re-renders and in re-render, 
// new category menu comes up as opened and previous one as closed.
