import React,{Suspense} from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../reusableComponents/Button";
import LoadingScreen from "./LoadingScreen";
const Home = () => {
  return (
    <>
      <>
      <Suspense fallback={<LoadingScreen/>}>
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
        </Suspense>

      </>
    </>
  );
};

export default Home;