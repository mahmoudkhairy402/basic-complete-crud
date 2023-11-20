import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Addproduct() {
  const [prod, setProd] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });
  const Navigate = useNavigate();
  let handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setProd((old) => ({
      ...old,
      [name]: value,
    }));
  };

  let addprd = (e) => {
    e.preventDefault();
    axios
      .post(" http://localhost:4000/products", prod)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    Navigate("/products");
  };
  return (
    <>
      <form onSubmit={addprd}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={prod.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <input
            className="form-control"
            type="text"
            id="description"
            name="description"
            value={prod.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            className="form-control"
            type="number"
            id="price"
            name="price"
            value={prod.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image Url
          </label>
          <input
            className="form-control"
            type="text"
            id="image"
            name="image"
            value={prod.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            name="category"
            className="form-control"
            id="category"
            onChange={handleChange}
          >
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">electronics</option>
            <option value="jewelery"> jewelery</option>
            <option value="men's clothing">men's clothing </option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          ADD Product
        </button>
      </form>
    </>
  );
}

export default Addproduct;
