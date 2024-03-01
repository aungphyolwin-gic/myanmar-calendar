import React from "react";
import MyanmarMonth from "./img/myanmarMonthPic.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-auto">
          <h1 className="d-inline-flex bg-white text-black p-3 m-0">မြန် မာ လ များ</h1>
        </div>
      </div>
      <div className="row">
        <Link to="/months">
          <div className="card img-thumbnail">
            <img src={MyanmarMonth} alt="myanmar month zodic" />
          </div>
        </Link>
      </div>
    </div>
  );
};
