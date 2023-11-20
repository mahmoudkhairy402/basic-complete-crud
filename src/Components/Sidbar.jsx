import React from "react";
import Style from "../Styles/sidebar.module.css";
import { Link } from "react-router-dom";
function Sidbar() {
  return (
    <div>
      <ul className={`${Style.ul}`}>
        <li>
          <Link to={"products/addproduct"}>Add Product</Link>
        </li>
        <li>
          <Link to={"/products"}>Products List</Link>
        </li>
        <li>
          <Link to={"/categories"}>Categories</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidbar;
