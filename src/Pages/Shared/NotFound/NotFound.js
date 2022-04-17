import React from "react";
import error from "../../../images/Error.png";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center mt-5">
        Robot is tired !! can't give you services 404!!
      </h2>
      <div className="w-50 mx-auto">
        <img className="w-100 " src={error} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
