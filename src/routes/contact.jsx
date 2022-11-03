import "../styles/routes/contact.css";

export default function ContactPage() {
  return (
    <div className="contact_page__container">
      <form className="contact__form" action="">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <section className="contact_input__section">
          <div className="name_fields">
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                id="first_name"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                id="last_name"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="yourname@email.com"
          />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" />
        </section>

        <div className="checkbox__wrapper">
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement">
            You agree to providing your data to {`name`} who may contact you.
          </label>
        </div>

        <button type="submit" id="btn__submit">
          Send message
        </button>
      </form>
    </div>
  );
}
