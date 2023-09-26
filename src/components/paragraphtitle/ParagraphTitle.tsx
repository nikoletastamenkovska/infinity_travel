import React from "react";
import styles from "./ParagraphTitle.module.css";

interface Props {
  title: string;
}

export const ParagraphTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="container py-md-3">
      <div className="row">
        <div className={`col ${styles.styled_title}`}>{title}</div>
      </div>
    </div>
  );
};
