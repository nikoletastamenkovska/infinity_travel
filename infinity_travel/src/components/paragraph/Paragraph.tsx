import React from "react";

interface Props {
  text: string;
}

export const Paragraph: React.FC<Props> = ({ text }) => {
  return (
    <div className="container">
      <div className="row">
        <p className="col pt-2 pb-3 pt-md-3 pb-md-5 m-0">{text}</p>
      </div>
    </div>
  );
};
