import React from "react";

interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="container-fluid py-3 py-lg-5">
      <div className="row p-0">
        <div className="col-2 col-md-3">
          <hr />
        </div>
        <h2 className="col-8 col-md-6 text-center">{title}</h2>
        <div className="col-2 col-md-3">
          <hr />
        </div>
      </div>
    </div>
  );
};
