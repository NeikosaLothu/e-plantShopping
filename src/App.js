import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  // ✅ FIX: correct Redux state access
  const cart = useSelector((state) => state.cart.items);

  // ✅ FIX: define function OUTSIDE JSX
  const handleGetStartedClick = () => {
    setPage("products");
  };

  return (
    <div>

      {/* ✅ Navbar ONLY when not on home */}
      {page !== "home" && (
        <Navbar
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          goHome={() => setPage("home")}
          goCart={() => setPage("cart")}
        />
      )}

      {/* ✅ LANDING PAGE */}
      {page === "home" && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
            backgroundSize: "cover",
            color: "white",
          }}
        >
          <h1>Paradise Nursery</h1>
          <p>Welcome to our plant shop 🌿</p>

          {/* ✅ FIX: proper button */}
          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      )}

      {/* ✅ PRODUCT PAGE */}
      {page === "products" && <ProductList />}

      {/* ✅ CART PAGE */}
      {page === "cart" && (
        <CartItem goHome={() => setPage("products")} />
      )}

    </div>
  );
}

export default App;