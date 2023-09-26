import { GetStaticProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { TicketForm } from "src/components/ticketForm/TicketForm";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";
import styles from "./AeroplaneTichkets.module.css";

interface AeroplaneTicketsProps {
  allCountries: ArrangementType[];
}

const AeroplaneTickets: NextPage = () => {
  return (
    <>
      <HeroBanner image={"/images/hero_banner/aeroplane_bg.png"} />
      <SectionTitle title={"Авионски билети"} />
      <div className={`container px-5 mb-5 ${styles.form_wrapper}`}>
        <TicketForm />
      </div>
      <Newsletter />
    </>
  );
};
export default AeroplaneTickets;

export const getStaticProps: GetStaticProps<
  AeroplaneTicketsProps
> = async () => {
  const allCountries: ArrangementType[] = await fetchCountries();

  return {
    props: {
      allCountries,
    },
    revalidate: 24 * 60 * 60,
  };
};
