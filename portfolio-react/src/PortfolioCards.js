import React from "react";

const PortfolioCards = props => {
  return (
    <div className="imgs col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <a href={props.githubLink} target="blank">
        <div className="hovereffect">
          <img className="imgResponsive" src={props.pictLink} />
          <div className="overlay">
            <h2>{props.project}</h2>
          </div>
        </div>
      </a>
    </div>
  );
};
export default PortfolioCards;
