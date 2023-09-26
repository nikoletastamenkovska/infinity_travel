import React from "react";
import { TestimonialType } from "src/types/data_interface";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import styles from "./Testimonial.module.css";
import { TestimonialCard } from "./TestimonialCard";
interface Props {
  data: TestimonialType[];
}
export const Testimonial: React.FC<Props> = ({ data }) => {
  return (
    <>
      <SectionTitle title={"Тестимониал"} />
      <div className={`container py-5 ${styles.background_testimonials}`}>
        <div className={`row m-0 ${styles.styled_card_row}`}>
          {data.map((testimonial) => {
            return <TestimonialCard key={testimonial.Id} card={testimonial} />;
          })}
        </div>
      </div>
    </>
  );
};
