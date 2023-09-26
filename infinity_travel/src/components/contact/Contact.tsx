import React, { useState } from "react";
import formStyles from "../form/FormStyles.module.css";
import { ContactAddressPhone } from "../contactadtessphone/ContactAddressPhone";

export const Contact = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    eMail: "",
    message: "",
  });
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://secretive-canary-variraptor.glitch.me/contact",
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
          message: "",
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
    <div className="container">
      <div className="row">
        {showSuccessAlert && (
          <div className="alert alert-success" role="alert">
            Вашата порака е испратена.
          </div>
        )}
        <div className="col-md-8">
          <form
            onSubmit={handleSubmit}
            className={`container ${formStyles.styled_form}`}
          >
            <div className="row pb-5 d-flex align-items-center">
              <div className="col-12 col-lg-6">
                <label className="py-2" htmlFor="userName">
                  Име
                </label>
                <input
                  className={formStyles.styled_input}
                  type="text"
                  name="userName"
                  id="userName"
                  value={formData.userName}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12 col-lg-6">
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
              <div className="col-12">
                <label className="py-2" htmlFor="message">
                  Порака
                </label>
                <textarea
                  cols={20}
                  rows={5}
                  className={formStyles.styled_input}
                  name="message"
                  id="message"
                  value={formData.message}
                  required
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <button className={formStyles.styled_button} type="submit">
                  Пријави ме
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center text-justify">
          <ContactAddressPhone />
        </div>
      </div>
    </div>
  );
};
