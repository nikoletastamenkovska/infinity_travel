import { GetStaticProps, NextPage } from "next";
import { AboutUsSection } from "src/components/aboutussection/AboutUsSection";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Contact } from "src/components/contact/Contact";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface AboutUsProps {
  allCountries: ArrangementType[];
}

const AboutUs: NextPage<AboutUsProps> = ({ allCountries }) => {
  return (
    <>
      <HeroBanner image={"/images/hero_banner/bg_about_us.png"} />
      <SectionTitle title={"За нас"} />
      <AboutUsSection image={"/images/hero_banner/bg_about_us_section.png"} />
      <SectionTitle title={"Контакт"} />
      <Contact />
      <Newsletter />
    </>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
  const allCountries: ArrangementType[] = await fetchCountries();

  return {
    props: {
      allCountries,
    },
    revalidate: 24 * 60 * 60,
  };
};
