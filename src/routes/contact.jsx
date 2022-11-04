import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/footer";
import "../styles/routes/contact.css";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const initialFormErrors = {
  firstName: false,
  lastName: false,
  email: false,
  message: false,
};

const ContactPage = () => {
  //form state
  const [formDetails, setFormDetails] = useState(initialData);

  //when false, input is valid, when true there is an error
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  //checkbox checked state
  const [isChecked, setIsChecked] = useState(false);

  //handling checkbox input
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  //handling form inputs
  function handleFormDetails(e) {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  }

  //dynamically removing the error state once it's non empty
  useEffect(() => {
    if (formDetails.message !== "") {
      setFormErrors({ message: false });
    }

    if (formDetails.lastName !== "") {
      setFormErrors({ lastName: false });
    }

    if (formDetails.firstName !== "") {
      setFormErrors({ firstName: false });
    }

    if (formDetails.email !== "") {
      setFormErrors({ email: false });
    }
  }, [formDetails]);

  function handleSubmit(e) {
    e.preventDefault();

    //toggling error hints for empty fields when submit is clicked
    if (formDetails.firstName === "") {
      setFormErrors({ firstName: true });
    }

    if (formDetails.lastName === "") {
      setFormErrors({ lastName: true });
    }

    if (formDetails.email === "") {
      setFormErrors({ email: true });
    }

    if (formDetails.message === "") {
      setFormErrors({ message: true });
    }

    //making sure all fields are non-empty before submission can run
    if (
      formDetails.email === "" ||
      formDetails.message === "" ||
      formDetails.firstName === "" ||
      formDetails.lastName === ""
    ) {
      return;
    }

    // console.log(formDetails);
  }
  return (
    <>
      <div className="contact_page__container">
        <form className="contact__form" onSubmit={handleSubmit} action="">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>

          <section className="contact_input__section">
            <div className="name_fields">
              <div>
                <label htmlFor="firstName">First name</label>
                <input
                  value={formDetails.firstName}
                  onChange={handleFormDetails}
                  id="first_name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className={
                    formErrors.firstName ? "input__error" : "valid__input"
                  }
                />
                <p className="error__message">
                  {formErrors.firstName ? "Please enter a name" : ""}
                </p>
              </div>

              <div>
                <label htmlFor="lastName">Last name</label>
                <input
                  value={formDetails.lastName}
                  onChange={handleFormDetails}
                  id="last_name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className={
                    formErrors.lastName ? "input__error" : "valid__input"
                  }
                />
                <p className="error__message">
                  {formErrors.lastName ? "Please enter a last name" : ""}
                </p>
              </div>
            </div>

            <label htmlFor="email">Email</label>
            <input
              value={formDetails.email}
              onChange={handleFormDetails}
              id="email"
              type="email"
              name="email"
              placeholder="yourname@email.com"
              className={formErrors.email ? "input__error" : "valid__input"}
            />
            <p className="error__message">
              {formErrors.email ? "Please enter a valid email" : ""}
            </p>

            <label htmlFor="message">Message</label>
            <textarea
              value={formDetails.message}
              onChange={handleFormDetails}
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className={formErrors.message ? "input__error" : "valid__input"}
            />
            <p className="error__message">
              {formErrors.message ? "Please enter a message" : ""}
            </p>
          </section>

          <div className="checkbox__wrapper">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChecked}
              name="agreement"
              id="agreement"
            />
            <label htmlFor="agreement">
              You agree to providing your data to Philip Adewole who may contact
              you.
            </label>
          </div>

          <button disabled={!isChecked} type="submit" id="btn__submit">
            Send message
          </button>
        </form>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
