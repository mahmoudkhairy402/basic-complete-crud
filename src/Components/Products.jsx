import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import ProductsContext from "../ContextApis/Context";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Products() {
  const { products, setProducts, getproducts } = useContext(ProductsContext);
  // const [prds, setprds] = useState(products);
  let deletPrd = (product) => {
    swal({
      title: `Are you sure to delete this product`,
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Product has been deleted Successfully!", {
          icon: "success",
        });
        axios
          .delete(`http://localhost:4000/products/${product.id}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        getproducts();
      }
    });
  };

  return (
    <div style={{ maxHeight: "calc(100vh - 72px)", overflow: " scroll" }}>
      <table className="table table-striped  table-dark">
        <tbody>
          <tr style={{ width: "100%" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Price</th>
            <th>Operations</th>
            <th>Image</th>
          </tr>
          {products ? (
            products.map((ele) => {
              return (
                <tr style={{ maxWidth: "100%" }} key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{ele.price}$</td>
                  <td>
                    <div
                      className="btn btn-danger btn-sm "
                      onClick={() => {
                        deletPrd(ele);
                      }}
                    >
                      Delete
                    </div>
                    <Link
                      to={`/products/updateproduct/${ele.id}`}
                      className="btn btn-primary btn-sm m-1 "
                    >
                      Update
                    </Link>
                    <Link
                      to={`/products/${ele.id}`}
                      className="btn btn-info btn-sm m-1 "
                    >
                      View
                    </Link>
                  </td>
                  <td style={{ maxWidth: "100%" }}>
                    {ele.image ? (
                      <img
                        style={{ maxWidth: "60px" }}
                        src={ele.image}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{ maxWidth: "60px" }}
                        src={require("../images/spinner.mov.gif")}
                        alt=""
                        srcset=""
                      />
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <div>
              <img
                src={require("../images/spinner.mov.gif")}
                alt=""
                srcset=""
              />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Products;

//! واقف عند ال جدول ال هجيبه من ال البوتستراب
