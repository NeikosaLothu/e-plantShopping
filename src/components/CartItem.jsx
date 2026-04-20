import { useSelector, useDispatch } from "react-redux";
import {
    increaseQty,
    decreaseQty,
    deleteItem
} from "../redux/CartSlice";

function CartItem({ goHome }) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    };

    return (
    <div>
        <h2>Your Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item, index) => (
        <div
            key={index}
            style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(increaseQty(index))}>+</button>
            <button onClick={() => dispatch(decreaseQty(index))}>-</button>
            <button onClick={() => dispatch(deleteItem(index))}>
            Delete
            </button>
        </div>
        ))}

        <h3>Total Cost: ${getTotal()}</h3>

        <button onClick={goHome}>Continue Shopping</button>
        <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
    );
}

export default CartItem;