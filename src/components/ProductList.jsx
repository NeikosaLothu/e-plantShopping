import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Medicinal" },
    { id: 2, name: "Tulsi", price: 12, category: "Medicinal" },
    { id: 3, name: "Mint", price: 8, category: "Medicinal" },
    { id: 4, name: "Neem", price: 15, category: "Medicinal" },
    { id: 5, name: "Lavender", price: 20, category: "Aromatic" },
    { id: 6, name: "Rosemary", price: 18, category: "Aromatic" },
    { id: 7, name: "Basil", price: 14, category: "Aromatic" },
    { id: 8, name: "Jasmine", price: 22, category: "Aromatic" },
    { id: 9, name: "Snake Plant", price: 25, category: "Indoor" },
    { id: 10, name: "Spider Plant", price: 16, category: "Indoor" },
    { id: 11, name: "Peace Lily", price: 30, category: "Indoor" },
    { id: 12, name: "Money Plant", price: 12, category: "Indoor" }
];

function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
    <div>
        <h2>Our Plants</h2>

        {["Medicinal", "Aromatic", "Indoor"].map((category) => (
            <div key={category}>
            <h3>{category} Plants</h3>

            {plants
                .filter((p) => p.category === category)
                .map((plant) => {
                const inCart = cart.find((item) => item.id === plant.id);

                return (
                    <div key={plant.id}>
                    <p>{plant.name} - ${plant.price}</p>

                    <button
                        onClick={() => dispatch(addToCart(plant))}
                        disabled={!!inCart}
                    >
                        {inCart ? "Added" : "Add to Cart"}
                    </button>
                </div>
                );
            })}
        </div>
        ))}

        <h3>
            Cart Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </h3>
    </div>
    );
}

export default ProductList;