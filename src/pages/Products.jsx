import { useState } from "react";
import productsData from "../data/productsData";
import "./Products.css";

function Products() {
  const [category, setCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter((p) => p.category === category);

  // Add product to cart
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
   
  };

  return (
    <div>
      <h2>Product Categories</h2>

      {/* Category Navbar */}
      <button onClick={() => setCategory("All")}>All</button>{"  "}
      <button onClick={() => setCategory("Mobiles")}>Mobiles</button>{" "}
      <button onClick={() => setCategory("Electronics")}>Electronics</button>{" "}
      <button onClick={() => setCategory("Fashion")}>Fashion</button>{" "}
      <button onClick={() => setCategory("Sports")}>Sports</button>{" "}
      <button onClick={() => setCategory("Home Appliances")}>
        Home Appliances
      </button>

      <hr />

      {/* Products List */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            {/* Display product image */}
            <img src={product.image} alt={product.name} />

            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;