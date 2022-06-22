import React from "react";
import "../style/Cards.css";

const Card = ({ item }) => {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="card-body text-light">
                <h4 className="card-title">{item.name}</h4>
                <div>email: {item.email}</div>
                <div>phone: {item.phone}</div>
                <div>website: {item.website}</div>
            </div>
        </div>
    );
};

export default Card;