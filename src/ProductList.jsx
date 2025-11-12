import React, { useState } from "react";

const productsData = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 1200 },
  { id: 2, name: "MacBook Air", category: "Laptop", price: 1500 },
  { id: 3, name: "Samsung Galaxy S23", category: "Mobile", price: 1000 },
  { id: 4, name: "Dell Inspiron", category: "Laptop", price: 900 },
  { id: 5, name: "Sony Headphones", category: "Accessories", price: 200 },
  { id: 6, name: "Apple Watch", category: "Accessories", price: 350 },
];

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  let filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "All" || product.category === category)
  );

  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      >
        <option value="All">All Categories</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Accessories">Accessories</option>
      </select>

      {/* Sort */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="none">Sort by Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      {/* Product List */}
      <div style={{ marginTop: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;