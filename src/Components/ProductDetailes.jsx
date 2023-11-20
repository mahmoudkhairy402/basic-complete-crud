import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailes() {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);

  let getproduct = () => {
    axios
      .get(`http://localhost:4000/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  console.log(product);
  useEffect(() => {
    getproduct();
    console.log(
      "🚀 ~ file: ProductDetailes.jsx:8 ~ ProductDetailes ~ product:",
      product
    );
  }, []);
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>

              <p className="card-text">{product.description}</p>
              <hr></hr>

              <p className="card-text">
                category:
                <big className="text-primary"> {product.category}</big>
              </p>
              <hr></hr>

              <p className="card-text">
                price:
                <big className="text-primary "> {product.price} $</big>
              </p>

              <hr />
              {product.rating && product.rating.count > 0 ? (
                <p className="card-text">
                  <div>
                    Rating Count:
                    <smal className="text-primary ">
                      {product.rating.count}
                    </smal>
                  </div>
                  <div>
                    Rating Count:
                    <small className="text-primary ">
                      {product.rating.rate}
                    </small>
                  </div>
                </p>
              ) : (
                <p className="card-text">
                  <small>No ratings available</small>
                </p>
              )}
              {/* {product["rating"]["count"] > 0 ? (
                <p className="card-text">
                  <div>
                    <small>Rating Count: {product["rating"]["count"]}</small>
                  </div>
                  <small>Rating Count: {product["rating"]["rate"]}</small>
                </p>
              ) : (
                <p className="card-text">
                  <small>No ratings available</small>
                </p>
              )} */}
            </div>
          </div>
        </div>
        <Link to={"/products"} className="btn btn-secondary">
          Back
        </Link>
      </div>
    </>
  );
}

export default ProductDetailes;
