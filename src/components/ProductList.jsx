import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // Medicinal (6)
    { id: 1, name: "Aloe Vera", price: 10, category: "Medicinal", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Tulsi", price: 12, category: "Medicinal", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Mint", price: 8, category: "Medicinal", img: "https://via.placeholder.com/100" },
    { id: 4, name: "Neem", price: 15, category: "Medicinal", img: "https://via.placeholder.com/100" },
    { id: 5, name: "Ashwagandha", price: 18, category: "Medicinal", img: "https://via.placeholder.com/100" },
    { id: 6, name: "Giloy", price: 20, category: "Medicinal", img: "https://via.placeholder.com/100" },

  // Aromatic (6)
    { id: 7, name: "Lavender", price: 20, category: "Aromatic", img: "https://via.placeholder.com/100" },
    { id: 8, name: "Rosemary", price: 18, category: "Aromatic", img: "https://via.placeholder.com/100" },
    { id: 9, name: "Basil", price: 14, category: "Aromatic", img: "https://via.placeholder.com/100" },
    { id: 10, name: "Jasmine", price: 22, category: "Aromatic", img: "https://via.placeholder.com/100" },
    { id: 11, name: "Lemongrass", price: 16, category: "Aromatic", img: "https://via.placeholder.com/100" },
    { id: 12, name: "Sage", price: 19, category: "Aromatic", img: "https://via.placeholder.com/100" },

  // Indoor (6)
    { id: 13, name: "Snake Plant", price: 25, category: "Indoor", img: "https://via.placeholder.com/100" },
    { id: 14, name: "Spider Plant", price: 16, category: "Indoor", img: "https://via.placeholder.com/100" },
    { id: 15, name: "Peace Lily", price: 30, category: "Indoor", img: "https://via.placeholder.com/100" },
    { id: 16, name: "Money Plant", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
    { id: 17, name: "Areca Palm", price: 28, category: "Indoor", img: "https://via.placeholder.com/100" },
    { id: 18, name: "ZZ Plant", price: 26, category: "Indoor", img: "https://via.placeholder.com/100" }
];

function ProductList() {
    const dispatch = useDispatch();

  // ✅ FIX: correct state
    const cart = useSelector((state) => state.cart.items);

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
                <div key={plant.id} style={{ marginBottom: "10px" }}>
                  {/* ✅ FIX: thumbnail added */}
                    <img src={plant.img} alt={plant.name} />

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