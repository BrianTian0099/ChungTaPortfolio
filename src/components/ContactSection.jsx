import "./ContactSection.css";
import githubIcon from "../assets/ICON/github-brands-solid.svg";
import linkedinIcon from "../assets/ICON/linkedin-brands-solid.svg";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">聯絡我</h2>
      <p className="contact-email">
        <a href="brianduke0097@gmail.com">brianduke0097@gmail.com</a>
      </p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/brian-tian-232945189
"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={linkedinIcon} alt="GitHub Icon" />
        </a>
        {/* <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={githubIcon} alt="GitHub Icon" />
        </a> */}
      </div>
    </section>
  );
};

export default ContactSection;
