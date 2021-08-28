import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ card }) => (
  <div className="card-glass-small">
    <div>
      <h3>{card.name}</h3>
      <h5>{card.tech_stack}</h5>
      <p>{card.description}</p>
    </div>
    <div className="">
      <a href={card.project_url} className="card__link">
        <button type="button" className="button">
          View Site
        </button>
      </a>
      {card.github_url && (
        <a href={card.github_url} className="card__link">
          <button type="button" className="button">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </button>
        </a>
      )}
      {card.documentation && (
        <a href={card.documentation} className="card__link">
          <button type="button" className="button">
            Docs
          </button>
        </a>
      )}
    </div>
  </div>
);
export default Card;
