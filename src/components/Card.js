import { Icon } from "semantic-ui-react";

const Card = ({ card }) => (
  <div className="card">
    <div>
      <h3>{card.name}</h3>
      <h5>{card.tech_stack}</h5>
      <p>{card.description}</p>
    </div>
    <div className="card__button">
      <a href={card.project_url} className="card__link">
        <button type="button" className="button">
          View Site
        </button>
      </a>
      {card.github_url && (
        <a href={card.github_url} className="card__link">
          <button type="button" className="button">
            <Icon name="github" size="large" />
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
