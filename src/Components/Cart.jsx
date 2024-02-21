import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
    const itemsInCart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const clearingCart = () => {
        dispatch(clearCart());
    }
    return (
        <>
        <h1>CART</h1>
        <button type="button" onClick={clearingCart}>Clear Cart</button>
        <CategoryItems data={itemsInCart}/>
        </>
    );
};

export default Cart;