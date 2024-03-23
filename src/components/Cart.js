import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
    <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold">Cart</h1>
        
        <div className="w-12/12 sm:w-9/12 sm:m-auto 2xl:w-5/12">
            <button className="px-2 py-1 m-4 bg-black text-white rounded-lg"
            
            onClick={handleClearCart}

            >
            Clear Cart
            </button>
            {cartItems.length === 0 && <h1>Cart is empty, Please add items to the cart!!!</h1> }
            <ItemList items={cartItems} />
        </div> 
    </div>
    )
}

export default Cart;