import React from "react";
import Card from "./Card";

const Cards = ({ data, type }) => {
    return (
        <div className="container-fluid">
            <div className="row">

                {data?.map((item, i) => (
                    <div className="col-md-12 col-lg-4 d-flex align-items-center justify-content-center" key={i}>
                        <Card item={item} type={type} />
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Cards;