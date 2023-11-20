import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Updateproduct() {
  const [prod, setProd] = useState({});
  const { productId } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    let getProductData = () => {
      axios
        .get(`http://localhost:4000/products/${productId}`)
        .then((res) =>
          setProd({
            title: res.data.title,
            description: res.data.description,
            price: res.data.price,
            image: res.data.image,
            category: res.data.category,
          })
        )
        .catch((err) => console.log(err));
    };
    getProductData();
  }, [productId]);

  let handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setProd((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(prod);
  };

  let updateProduct = (e) => {
    axios
      .patch(`http://localhost:4000/products/${productId}`, prod)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
    Navigate("/products");
  };

  return (
    <>
      <form action="" onSubmit={updateProduct}>
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

        <div>
          <button className="btn btn-secondary me-2">Back</button>
          <button type="submit" className="btn btn-primary m-2 ">
            Update Product
          </button>
        </div>
      </form>
    </>
  );
}

export default Updateproduct;
