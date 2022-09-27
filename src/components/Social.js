import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => (
  <div className="social">
    <a
      href="https://www.linkedin.com/in/ch04937-carlos-hernandez/"
      className="social-link">
      <FontAwesomeIcon icon={faLinkedin} size="3x" color="gold" />
    </a>
    <a href="https://www.github.com/ch04937" className="social-link">
      <FontAwesomeIcon icon={faGithub} size="3x" color="gold" />
    </a>
    <a href="https://twitter.com/ch04937" className="social-link">
      <FontAwesomeIcon icon={faTwitter} size="3x" color="gold" />
    </a>
  </div>
);
export default Social;
