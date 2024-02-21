import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
import { useContext } from "react";
const RestaurantCard = (props) => {
    // console.log(props);
    const { resCard } = props; //The line of code is essentially saying: "From the props object, extract a property named resCard.
    const {
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        avgRating,
        costForTwo,
    } = resCard?.info; //this is also destructuring assignment : to handle cases where resCard or resCard.info might be null or undefined.Also, mentioned properties are destructured and taken out, so we can directly use them without doing resCard.info
    const data = useContext(userContext); //
    return (
        <div className="res-card" data-testid="resCard">
            <div className="res-logo">
                <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            </div>
            <h3>{name}</h3>
            <h4>{(cuisines).join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>User : {data.loggedInUser}</h4>

        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {  //withPromotedLabel is a function which is  returning the higher order component.
    return (props) => {
        return ( //while the inner function returns the JSX element that includes both the label and the RestaurantCard.
            <div>
                <label className="label">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;