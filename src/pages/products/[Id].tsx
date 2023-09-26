import { GetServerSideProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import Slider from "src/components/slider/Slider";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";
import { formatDate } from "src/utils/formatDate";
import styles from "./Products.module.css";

interface ProductIdProps {
  allCountries: ArrangementType[];
  filteredRegion: ArrangementType[];
}

const ProductId: NextPage<ProductIdProps> = ({
  allCountries,
  filteredRegion,
}) => {
  const region: ArrangementType = filteredRegion[0];
  return (
    <>
      <HeroBanner image={region.Image} />
      <SectionTitle title={region.Name} />
      <div className="container">
        <div className="row d-flex">
          <div className={`col-lg-6 d-flex px-4 ${styles.styled_color}`}>
            <button className={styles.option_button}>Опис</button>
            <button className={styles.option_button}>Галерија</button>
            <button className={styles.option_button}>Цени</button>
            <button className={styles.option_button}>Превоз</button>
          </div>
          <div className="offset-lg-2 col col-lg-4 align-self-end">
            <button
              className={`w-100 d-flex justify-content-end ${styles.styled_button}`}
            >
              <i className="fa-solid fa-location-dot"></i>
              {region.Location.Country} {", "}
              {region.Location.Region}
            </button>
          </div>
          <div className="row ms-auto me-auto">
            <div className={`col px-3 py-4 ${styles.styled_color}`}>
              MARGARITI Rooms е еден од малкуте на број објекти, кои служат за
              сместување на туристи во живописното градче Агиос Никитас.
              Објектот Маргарити, располага со двокреветни соби за сместување, а
              некои од нив имаат и помошни легла. За оние пак кои сакаат подолем
              комфорт, во состав на објектот се наоѓа и еден апартман.
              Сместувањето во убавите соби, опремени со сопствен тоалет, ТВ,
              клима и балкон, е одличен избор доколку ја искористите можноста за
              обезбедување и на поволната исхрана во блиската таверна-ресторан.
              <br />
              <br />
              Цените во табелата се однесуваат за наем на студио/апартман за 7
              ноќевања, без превоз или со превоз според изборот во пребарувачот.
              Цените се изразени во EUR за уплата во денарска противвредност
              (1EUR=62MKD). * За резервација со EB попуст, 50% од вредноста на
              аранжманот се уплатува во моментот на правење на резервацијата. *
              Можност за користење на неискористените ваучери од Лето 2020.
            </div>
            <div className="container-fluid py-3 px-0">
              <Slider>
                {region.Gallery.map((image, index) => (
                  <img
                    key={index}
                    className="me-2"
                    src={image.Url}
                    alt="image of explored places"
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-0 px-lg-1 py-3">
        <div className="row ms-auto me-auto">
          <div
            className={`w-100 py-4 d-flex justify-content-start ps-3 ${styles.option_button} ${styles.prize_button}`}
          >
            Цени
          </div>
        </div>
        <div className="row ms-0 me-0 ms-lg-auto me-lg-auto">
          <table className="table table-hover">
            <thead>
              <tr className={`text-center ${styles.styled_table_head}`}>
                <th scope="col">Сместување</th>
                <th scope="col">Датум на пристигнување</th>
                <th scope="col">Датум на заминување</th>
                <th scope="col">Денови</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              {region.AvailabilityDates.map((availability, index) => (
                <tr
                  className={`text-center ${styles.styled_table_body}`}
                  key={index}
                >
                  <td className={styles.width_20}>{region.Type}</td>
                  <td className={styles.width_20}>
                    {formatDate(availability.ArrivalDate)}
                  </td>
                  <td className={styles.width_20}>
                    {formatDate(availability.DepartureDate)}
                  </td>
                  <td className={styles.width_20}>
                    {availability.NumberOfDays}
                  </td>
                  <td className={styles.width_20}>
                    {" "}
                    &euro; {availability.Price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container py-3">
        <div className="row ms-auto me-auto">
          <div
            className={`w-100 d-flex justify-content-start ps-3 ${styles.option_button} ${styles.prize_button}`}
          >
            Превоз
          </div>
          <div className={`col px-3 py-4 ${styles.styled_color}`}>
            rure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default ProductId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { Id } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();

  let apiUrl = `https://secretive-canary-variraptor.glitch.me/arrangements`;

  if (Id) {
    apiUrl += `?Id=${Id}`;
  }

  const response = await fetch(apiUrl);
  const filteredRegion: ArrangementType[] = await response.json();

  return {
    props: {
      allCountries,
      filteredRegion,
    },
  };
};
