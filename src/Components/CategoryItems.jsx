import { useDispatch } from "react-redux";
import { LOGO_URL_ITEMS } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
const CategoryItems = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const addItemToCart = (item) => {
        // Check if the item is already in the cart
        const existingItem = cartItems.find((cartItem) => cartItem.card.info.name === item.card.info.name);
    
        if (!existingItem || existingItem.quantity === undefined) {
            // If the item is not in the cart, dispatch an action to add it
            dispatch(addItem({
                ...item,
                quantity: 1 // Set initial quantity to 1
            }));
        } else {
            // If the item is already in the cart, dispatch an action to increase its quantity
            dispatch(addItem({
                ...existingItem, // Include the existing item object
                quantity: existingItem.quantity + 1 // Increment quantity
            }));
        }
    }
    
    const removeItemFromCart = (itemName) => {
        const itemToRemove = cartItems.find((item) => item.card.info.name === itemName)
        console.log("itemToRemove",itemToRemove);
        if (itemToRemove) {
            dispatch(removeItem({
                ...itemToRemove,
                quantity: itemToRemove.quantity - 1,
            }
            ));
        }
    }

    return (
        <>
            {props.data.map((item) => (
                <div className="items" key={item.card.info.id}>
                    <h3>{item.card.info.name}</h3>
                    <img src={LOGO_URL_ITEMS + item.card.info.imageId} alt="image not found" />
                    <div className="addButton" onClick={() => addItemToCart(item)}>➕</div>
                    <div className="remButton" onClick={() => removeItemFromCart(item.card.info.name)}>➖</div>
                    <span>{item.quantity}</span>
                    {typeof item.card.info.price === "number" ? (
                        <h4>{item.card.info.price / 100} /-</h4>
                    ) : typeof item.card.info.price === "string" ? (
                        <h4>{parseInt(item.card.info.price, 10) / 100} /-</h4>
                    ) : (
                        <h4>{item.card.info.defaultPrice / 100} /-</h4>
                    )}
                    <div>
                        <p>{item.card.info.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CategoryItems;
