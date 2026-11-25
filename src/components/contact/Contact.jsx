import { useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "./style.scss";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("Sending your message…");

    try {
      await emailjs.sendForm(
        "service_tk6xbyv",
        "template_a13giai",
        formRef.current,
        "GYdRzJ4Oe-eU8gbsb"
      );
      setStatus("Thanks — your message has been sent.");
      formRef.current?.reset();
    } catch {
      setStatus("Something went wrong. Please email me directly.");
    }
  };

  return (
    <div className="contact">
      <div className="contact__copy">
        <p className="eyebrow"><span /> Have a project in mind?</p>
        <h2 className="contact__heading">Let’s make something <span>great.</span></h2>
        <p className="contact__intro">Tell me what you’re working on. I’d love to hear about it.</p>
        <div className="contact__details">
          <a href="mailto:erikharutyunyan398@gmail.com">
            <span>Email</span>erikharutyunyan398@gmail.com<FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="tel:+37455091859">
            <span>Phone</span>+374 55 091859<FiArrowUpRight aria-hidden="true" />
          </a>
          <p><span>Based in</span>Yerevan, Armenia</p>
        </div>
        <a className="contact__cv" href="/ERIK_HARUTYUNYAN_CV.pdf" download>
          Download my CV <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <form className="contact__form" ref={formRef} onSubmit={sendEmail}>
        <label>
          Your name
          <input type="text" required placeholder="Jane Smith" name="name" autoComplete="name" />
        </label>
        <label>
          Email address
          <input type="email" required placeholder="jane@company.com" name="email" autoComplete="email" />
        </label>
        <label>
          A little about your project
          <textarea rows={5} required placeholder="What are you looking to build?" name="message" />
        </label>
        <button className="button button--dark" type="submit">
          Send message <FiArrowUpRight aria-hidden="true" />
        </button>
        <p className="contact__status" aria-live="polite">{status}</p>
      </form>
    </div>
  );
}

export default Contact;
