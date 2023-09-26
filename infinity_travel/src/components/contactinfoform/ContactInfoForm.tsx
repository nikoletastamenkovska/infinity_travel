import React, { useState } from "react";
import formStyles from "../form/FormStyles.module.css";

interface Props {
  formData: {
    tripType: string;
    fromWhere: string;
    toWhere: string;
    departure: string;
    arrival: string;
    adults: string;
    kids: string;
    infants: string;
    travelClass: string;
  };
  onResetForm: () => void;
}

export const ContactInfoForm: React.FC<Props> = ({ formData, onResetForm }) => {
  const [contactFormData, setContactFormData] = useState({
    userName: "",
    userSurname: "",
    eMail: "",
    phone: "",
  });
  const [completed, setCompleted] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://secretive-canary-variraptor.glitch.me/form",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            ...contactFormData,
          }),
        }
      );
      if (response.ok) {
        setContactFormData({
          userName: "",
          userSurname: "",
          eMail: "",
          phone: "",
        });
      } else {
        console.error("Request failed");
      }
    } catch (error) {
      console.error("Error", error);
    }
    setCompleted(true);
  };

  const handleBackButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onResetForm();
  };

  return (
    <>
      {!completed ? (
        <div className="container py-3">
          <div className="row">
            <div className="col">
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
                      value={contactFormData.userName}
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-12 col-lg-6">
                    <label className="py-2" htmlFor="userSurname">
                      Презиме
                    </label>
                    <input
                      className={formStyles.styled_input}
                      type="text"
                      name="userSurname"
                      id="userSurname"
                      value={contactFormData.userSurname}
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
                      value={contactFormData.eMail}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label className="py-2" htmlFor="phone">
                      Телефон
                    </label>
                    <input
                      className={formStyles.styled_input}
                      type="tel"
                      name="phone"
                      id="phone"
                      value={contactFormData.phone}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="offset-lg-3 col-lg-6">
                    <button className={formStyles.styled_button} type="submit">
                      Побарај понуда
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center alert px-0" role="alert">
            <p className="mb-0 mt-2">
              Вашето барање се обработува. Ви благодариме.
            </p>
            <div className="container">
              <button
                className={`btn w-50 mx-1 mt-5 p-3  ${formStyles.styled_button}`}
                type="reset"
                onClick={handleBackButton}
              >
                Назад
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
