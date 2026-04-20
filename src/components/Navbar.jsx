function Navbar({ cartCount, goHome, goCart }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            background: "#2d6a4f",
            color: "white"
        }}>
            <h2 onClick={goHome} style={{ cursor: "pointer" }}>
                Paradise Nursery
            </h2>

            <div>
                <button onClick={goHome}>Home</button>
                <button onClick={goCart}>Cart ({cartCount})</button>
            </div>
        </div>
    );
}

export default Navbar;