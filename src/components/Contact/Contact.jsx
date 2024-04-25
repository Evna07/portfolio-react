import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactContainer}>
      <form action="" className={styles.contactForm}>
        <h1>Reach out to me:</h1>
        <fieldset className={styles.contactFields}>
          <div className={styles.formField}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email:</label>
            <input type="mail" name="email" id="email" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>

          <button>Submit</button>
        </fieldset>
      </form>
    </section>
  );
};

export default Contact;
