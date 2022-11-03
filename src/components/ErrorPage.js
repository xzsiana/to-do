import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
      <section className="errorPage">
        <img src="https://cdn-icons-png.flaticon.com/512/4069/4069277.png" alt="404 Image" width="500px"></img>
        <h3>
          Oops.. It looks like the page you're looking for does not exist.
        </h3> <br></br>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </section>
  );
};

export default ErrorPage;
