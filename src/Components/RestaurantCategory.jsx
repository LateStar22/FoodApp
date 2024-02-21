import { useState } from "react";
import CategoryItems from "./CategoryItems";
const RestaurantCategory = (props) => {
    
    const handleClick = () => {
        props.abcd();
    }

    return (
        <div className="menuList">
            <div onClick={handleClick} className="menuListChild">
                <h3>{props.title} ({props.data.length})</h3>
                <span>{props.showItems ? "🔼" : "🔽"}</span> {/* Show up arrow if items are shown, down arrow if not */}
            </div>
            {props.showItems && <CategoryItems data={props.data}/>}
        </div>
    );
}

export default RestaurantCategory; 



/* 
1.In the handleClick function, props.setShowIndex() is called. setShowIndex is a function passed down from the RestaurantMenu component via props. 
It's responsible for updating the showIndex state in the RestaurantMenu component.

2. In the RestaurantMenu component, when setShowIndex(index) is called, it updates the state variable showIndex to the index of the category being clicked.

3.In the RestaurantCategory component, the showItems prop controls whether to render the CategoryItems component. 
It's set based on whether the current category index (index) matches the showIndex state. 
If they match, showItems is set to true, indicating that the category's items should be shown. 
Otherwise, it's set to false, indicating that the category's items should be hidden.*/