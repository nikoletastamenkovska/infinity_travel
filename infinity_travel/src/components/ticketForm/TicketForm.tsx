import React, { useState } from "react";
import { ContactInfoForm } from "../contactinfoform/ContactInfoForm";
import styles from "./TicketForm.module.css";

export const TicketForm = () => {
  const [formData, setFormData] = useState({
    tripType: "",
    fromWhere: "",
    toWhere: "",
    departure: "",
    arrival: "",
    adults: "1",
    kids: "0",
    infants: "0",
    travelClass: "Економска",
  });

  const [completed, setCompleted] = useState<boolean>(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResetForm = () => {
    setCompleted(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCompleted(true);
  };

  return (
    <>
      {!completed ? (
        <form className="py-5" onSubmit={handleSubmit}>
          <h2 className={styles.styled_h2}>Пребарувај</h2>
          <div className="form-group">
            <div className="row mx-0 mb-5">
              <div className="col col-lg-3 form-check form-check-inline">
                <input
                  className={`form-check-input ${styles.check_input_styled}`}
                  type="radio"
                  name="tripType"
                  id="inlineRadio1"
                  value="повратен билет"
                  required
                  onChange={handleInputChange}
                />
                <label
                  className={`form-check-label ${styles.styles_label_radio}`}
                  htmlFor="inlineRadio1"
                >
                  Повратен билет
                </label>
              </div>
              <div className="col col-lg-3 form-check form-check-inline">
                <input
                  className={`form-check-input ${styles.check_input_styled}`}
                  type="radio"
                  name="tripType"
                  id="inlineRadio2"
                  value="еден правец"
                  onChange={handleInputChange}
                  required
                />
                <label
                  className={`form-check-label ${styles.styles_label_radio}`}
                  htmlFor="inlineRadio2"
                >
                  Еден правец
                </label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-lg-3">
                <label
                  className="form-check-label mx-1 my-2"
                  htmlFor="fromWhere"
                >
                  Од
                </label>
                <input
                  required
                  id="fromWhere"
                  type="text"
                  className="form-control"
                  name="fromWhere"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12 col-lg-3">
                <label className="form-check-label mx-1 my-2" htmlFor="toWhere">
                  До
                </label>
                <input
                  required
                  id="toWhere"
                  type="text"
                  name="toWhere"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12 col-lg-3">
                <label
                  className="form-check-label mx-1 my-2"
                  htmlFor="departure"
                >
                  Датум на поаѓање
                </label>
                <input
                  required
                  id="departure"
                  type="date"
                  name="departure"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12 col-lg-3">
                <label className="form-check-label mx-1 my-2" htmlFor="arrival">
                  Датум на враќање
                </label>
                <input
                  required
                  id="arrival"
                  type="date"
                  name="arrival"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="form-group">
                  <label className=" mx-1 my-2" htmlFor="select_1">
                    Возрасни
                  </label>
                  <select
                    onChange={handleInputChange}
                    required
                    name="adults"
                    className="form-control"
                    id="select_1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="form-group">
                  <label className=" mx-1 my-2" htmlFor="select_2">
                    Деца
                  </label>
                  <select
                    onChange={handleInputChange}
                    required
                    name="kids"
                    className="form-control"
                    id="select_2"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="form-group">
                  <label className=" mx-1 my-2" htmlFor="select_3">
                    Бебиња
                  </label>
                  <select
                    onChange={handleInputChange}
                    required
                    name="infants"
                    className="form-control"
                    id="select_3"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="form-group">
                  <label className=" mx-1 my-2" htmlFor="select_4">
                    Деца
                  </label>
                  <select
                    onChange={handleInputChange}
                    required
                    name="travelClass"
                    className="form-control"
                    id="select_4"
                  >
                    <option>Економска</option>
                    <option>Бизнис</option>
                    <option>Прва класа</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mx-0 mb-5">
              <div className="col col-lg-3 px-0">
                <button
                  type="submit"
                  className={`btn w-100 mx-1 mt-5 p-3  ${styles.styled_submit_btn}`}
                >
                  Побарај понуда
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <ContactInfoForm formData={formData} onResetForm={handleResetForm} />
      )}
    </>
  );
};
