const Contact = () => {
  return (
      <section>
          <h2>Contact Us</h2>
          <form>
              {/* Name input */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              {/* Email input */}
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              {/* Entrance question */}
              <label htmlFor="entrance">Why do you want to join the Guitar Club?</label>
              <textarea id="entrance" name="entrance" required></textarea>

              {/* Motivation question */}
              <label htmlFor="motivation">What motivates you to play classical guitar?</label>
              <textarea id="motivation" name="motivation" required></textarea>

              {/* Submit button */}
              <button type="submit">Send Message</button>
          </form>
      </section>
  );
};

export default Contact;
