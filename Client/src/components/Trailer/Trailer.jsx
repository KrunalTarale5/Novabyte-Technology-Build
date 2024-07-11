import React from "react";
import "./Trailer.css";

const Trailer = ({header,content,url}) => {
  return (
    <div className="">
      <div className="main-container">
        <div className="container-1">
          <div className="d-flex flex-column justify-content-between px-4 container1">
          <h1 dangerouslySetInnerHTML={{ __html: header }} />
            <p className="mt-5">
              {content}
            </p>
          </div>
        </div>
        <div className="container-2">
          <img
            src={url}
            className="img-fluid img-large"
            alt="Wimbledon"
          />
        </div>
      </div>
    </div>
  );
};

export default Trailer;
