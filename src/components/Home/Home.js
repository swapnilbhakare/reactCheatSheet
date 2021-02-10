import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/About"> Go to About</Link>
    </div>
  );
}

export default Home;
