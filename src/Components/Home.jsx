import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/products"}>Go to products page</Link>{" "}
    </div>
  );
}

export default Home;
