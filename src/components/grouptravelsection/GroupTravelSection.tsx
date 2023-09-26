import React from "react";
import { ParagraphTitle } from "../paragraphtitle/ParagraphTitle";
import { Paragraph } from "../paragraph/Paragraph";

export const GroupTravelSection = () => {
  return (
    <div className="container">
      <div className="row mb-lg-5" id="mice_tourism">
        <div className="col-lg-6 order-2 order-lg-1 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
          <img
            className="w-100 h-100"
            src="/images/group_travel/page/group_travel_1.png"
            alt="image of group planing session"
          />
        </div>
        <div className="col-lg-6 order-lg-2 d-flex align-items-center justify-content-center flex-column">
          <ParagraphTitle title={"MICE Tourism"} />
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
            }
          />
        </div>
      </div>
      <div className="row mb-lg-5" id="team_build">
        <div className="col-lg-6 order-2 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
          <img
            className="w-100 h-100"
            src="/images/group_travel/page/group_travel_2.png"
            alt="image of group planing session"
          />
        </div>
        <div className="col-lg-6 order-1 d-flex align-items-center justify-content-center flex-column">
          <ParagraphTitle title={"Team Building"} />
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
            }
          />
        </div>
      </div>
      <div className="row mb-lg-5" id="tailor_made">
        <div className="col-lg-6 order-2 order-lg-1 d-flex align-items-center justify-content-center">
          <img
            className="w-100 h-100"
            src="/images/group_travel/page/group_travel_3.png"
            alt="image of group planing session"
          />
        </div>
        <div className="col-lg-6 order-lg-2 d-flex align-items-center justify-content-center flex-column">
          <ParagraphTitle title={"Tailor made"} />

          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
            }
          />
        </div>
      </div>
    </div>
  );
};
