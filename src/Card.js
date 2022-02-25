import React from "react";
import iconUp from "./images/icon-up.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";

function Card({ id, username, followers, todayFollowers, socialIcon }) {
  console.log(id, username, followers, todayFollowers, socialIcon);

  return (
    <article className="card facebook bg-secondary">
      <p className="card-title">
        {(() => {
          switch (socialIcon) {
            case "facebook":
              return <img src={facebook} alt="icon-up" />;
            case "twitter":
              return <img src={twitter} alt="icon-up" />;
            case "instagram":
              return <img src={instagram} alt="icon-up" />;
            case "linkedin":
              return <img src={linkedin} alt="icon-up" />;
            default:
              return null;
          }
        })()}
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src={iconUp} alt="icon-up" />
        &nbsp;
        <span className="card-followers-text">{todayFollowers} Today</span>
      </p>
    </article>
  );
}

export default Card;
