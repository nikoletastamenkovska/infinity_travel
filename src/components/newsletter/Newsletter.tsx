import React, { useState } from "react";
import formStyles from "../form/FormStyles.module.css";
import styles from "./Newsletter.module.css";

export const Newsletter = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    userName: "",
    eMail: "",
  });

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://secretive-canary-variraptor.glitch.me/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormData({
          userName: "",
          eMail: "",
        });
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 2500);
      } else {
        console.error("Request failed");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Подгответе се за неверојатни патувања. Ви благодариме на довербата.
        </div>
      )}
      <div
        className={`${styles.styled_acordion} ${
          isExpanded ? styles.expanded_acordion : ""
        }`}
      >
        <div className={styles.acordion_title} onClick={toggleAccordion}>
          <img
            src={"/icons_img/mail_icon.png"}
            alt="image od envelope"
            className={styles.styled_envelope}
          />
          <h4>Пријави се и добивај актуелни понуди на твојот маил</h4>
          {isExpanded ? (
            <img
              className={styles.chevron_up}
              src={"/icons_img/chevron_up.png"}
              alt="image of arrow up"
            />
          ) : (
            <img
              className={styles.chevron_down}
              src={"/icons_img/chevron-down.png"}
              alt="image of arrow down"
            />
          )}
        </div>
        {isExpanded && (
          <div
            className={`${styles.acordion_content} ${
              isExpanded ? styles.acordion_animation_in : ""
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className={`container-fluid ${formStyles.styled_form}`}
            >
              <div className="row pb-5 d-flex align-items-center">
                <div className="col-12 col-lg-4">
                  <label className="py-2" htmlFor="userName">
                    Име
                  </label>
                  <input
                    className={formStyles.styled_input}
                    type="text"
                    name="userName"
                    id="userName"
                    required
                    value={formData.userName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="py-2" htmlFor="eMail">
                    e-mail
                  </label>
                  <input
                    className={formStyles.styled_input}
                    type="email"
                    name="eMail"
                    id="eMail"
                    value={formData.eMail}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 col-lg-4">
                  <button className={formStyles.styled_button} type="submit">
                    Пријави ме
                  </button>
                </div>
                <div className="py-3">
                  Со кликнување на Пријави ме се зачленуваш за добивање на
                  маиловите за нашите актуелни понуди и промоции
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
