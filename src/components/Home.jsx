import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../reusableComponents/Button";
const Home = () => {
  return (
    <>
      <>
      <h2>Lazy Loading Assignment in react</h2>

        <nav>
          <div>
            <Link to="/users">
              <Button btnTxt="View Users" className="route-btn" />
            </Link>
          </div>
          <div>
            <Link to="/posts">
              <Button btnTxt="View Posts"  className="route-btn" />
            </Link>
          </div>
        </nav>

        <Outlet />

      </>
    </>
  );
};

export default Home;