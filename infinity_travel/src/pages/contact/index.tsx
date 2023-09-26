import { GetStaticProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { ContactAddressPhone } from "src/components/contactadtessphone/ContactAddressPhone";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface InfoProps {
  allCountries: ArrangementType[];
}

const Contact: NextPage<InfoProps> = ({ allCountries }) => {
  return (
    <>
      <HeroBanner image={"/images/hero_banner/hero_background.png"} />
      <div className="container py-5">
        <div className="row text-center">
          <ContactAddressPhone />
          <div className="col"></div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};
export default Contact;

export const getStaticProps: GetStaticProps<InfoProps> = async () => {
  const allCountries: ArrangementType[] = await fetchCountries();

  return {
    props: {
      allCountries,
    },
    revalidate: 24 * 60 * 60,
  };
};
