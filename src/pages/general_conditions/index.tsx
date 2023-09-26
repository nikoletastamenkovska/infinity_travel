import { GetStaticProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { Paragraph } from "src/components/paragraph/Paragraph";
import { ParagraphTitle } from "src/components/paragraphtitle/ParagraphTitle";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface GeneralConditionsProps {
  allCountries: ArrangementType[];
}

const GeneralConditions: NextPage<GeneralConditionsProps> = ({
  allCountries,
}) => {
  return (
    <>
      <HeroBanner image={"/images/hero_banner/bg_about_us.png"} />
      <SectionTitle title={"Општи Услови"} />
      <div className="container pb-5">
        <ParagraphTitle title={"Lorem ipsum"} />
        <Paragraph
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          }
        />
        <ParagraphTitle title={"Lorem ipsum dolor sit amet"} />
        <Paragraph
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          }
        />
        <ParagraphTitle
          title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
        />
        <Paragraph
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerciLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tation u"
          }
        />
      </div>
      <Newsletter />
    </>
  );
};

export default GeneralConditions;

export const getStaticProps: GetStaticProps<
  GeneralConditionsProps
> = async () => {
  const allCountries: ArrangementType[] = await fetchCountries();

  return {
    props: {
      allCountries,
    },
    revalidate: 24 * 60 * 60,
  };
};
