import React from "react";
import { BiErrorAlt } from "react-icons/all";
import IconUI from "../components/IconUI";

const TextError = (props) => {
  return (
    <div className="overlay-loading d-flex flex-column justify-content-center align-items-center">
      <IconUI size={60} color={"#FFF"}>
        <BiErrorAlt />
      </IconUI>
      
      <div className="fs-5 text-light user-select-none mt-3">
        Error fetching users: {props.message}
      </div>
    </div>
  );
};

export default TextError;
