import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ card }) => (
  <div className="card-glass-small">
    <div>
      <h3 className="card-title">{card.name}</h3>
      <h5 className="card-subtitle">{card.tech_stack}</h5>
      <p className="card-text">{card.description}</p>
    </div>
    <div className="card-footer d-flex flex-wrap justify-content-around">
      {card.buttons.map((item) => (
        <a href={item.link} className="m-1">
          <button className="btn btn-secondary">{item.name}</button>
        </a>
      ))}
    </div>
  </div>
);
export default Card;
