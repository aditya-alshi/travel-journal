import React from "react";

export default function Card({ item }) {
  // console.log(item.imageUrl)
  return (
    <>
      <div className="card">
        <div className="card-display-image">
          <img className="card-picture" src={item.imageUrl} alt="" />
        </div>
        <div className="card-info">
          <div className="card-info-top">
            <img
              className="location-logo"
              src="location-icon.png"
              alt=""
            />{" "}
            <span className="location">{item.location}</span>{" "}
            <a
              className="g-map-link"
              href={item.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <p className="the-title">{item.title}</p>
          <p className="duration">{item.startDate + " - " + item.endDate}</p>
          <p className="description">
            {item.description}
          </p>
        </div>
      </div>
      <hr className="horizontal-line"/>
    </>
  );
}
