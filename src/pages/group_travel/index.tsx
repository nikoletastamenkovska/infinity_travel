import { GetStaticProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Contact } from "src/components/contact/Contact";
import { GroupTravelSection } from "src/components/grouptravelsection/GroupTravelSection";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface GroupTravelProps {
  allCountries: ArrangementType[];
}

const GroupTravel: NextPage<GroupTravelProps> = ({ allCountries }) => {
  return (
    <>
      <HeroBanner image={"/images/hero_banner/bg-group_travel.png"} />
      <SectionTitle title={"Групни патувања"} />
      <GroupTravelSection />
      <SectionTitle title={"Контакт"} />
      <Contact />
      <Newsletter />
    </>
  );
};
export default GroupTravel;

export const getStaticProps: GetStaticProps<GroupTravelProps> = async () => {
  const allCountries: ArrangementType[] = await fetchCountries();

  return {
    props: {
      allCountries,
    },
    revalidate: 24 * 60 * 60,
  };
};
