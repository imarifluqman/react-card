import react from "react";
import Pdata from "./pdata";


function Card(props) {
  return (
    <>
      <div className="card">
        <div class="img">
          <img
            className=""
            src={props.img}
            alt=""
          />
          <div className="heart">
            <p>featured</p>
            <i className="far fa-heart"></i>
          </div>
        </div>
        <div className="text">
          <h6>Rs. {props.pri}</h6>
          <h5 className="">{props.name}</h5>
          <p className="">{props.des} </p>
          <div className="post d-flex justify-content-between">
            <p>karachi</p>
            <p>28 may</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
