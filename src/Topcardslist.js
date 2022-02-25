import React from "react";

import "./topcardslist.css";
import Card from "./Card";

const cardListData = [
  {
    id: 1,
    username: "@pepito",
    followers: "1483",
    todayFollowers: 12,
    socialIcon: "facebook",
  },
  {
    id: 2,
    username: "@luis",
    followers: "28k",
    todayFollowers: 4,
    socialIcon: "twitter",
  },
  {
    id: 3,
    username: "@oswaldo",
    followers: "6k",
    todayFollowers: 60,
    socialIcon: "instagram",
  },
  {
    id: 4,
    username: "@jose",
    followers: "12k",
    todayFollowers: 578,
    socialIcon: "linkedin",
  },
];

function Topcardslist() {
  return (
    <div className="top-cards">
      <div className="wrapper">
        <div className="grid">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              {cardListData.map(
                ({ id, username, followers, todayFollowers, socialIcon }) => (
                  <Card
                    key={id}
                    id={id}
                    username={username}
                    followers={followers}
                    todayFollowers={todayFollowers}
                    socialIcon={socialIcon}
                  />
                )
              )}
              {/* {cardListData.map((cardData) => (
                <Card key={cardData.id} {...cardData} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topcardslist;
