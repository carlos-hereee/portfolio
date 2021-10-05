const Card = ({ card }) => (
  <div className="card-sm">
    <div>
      <h3 className="card-title">{card.name}</h3>
      <h5>{card.tech_stack}</h5>
      <p>{card.description}</p>
    </div>
    <div className="d-flex flex-wrap justify-content-around">
      {card.buttons.map((item) => (
        <a href={item.link} className="m-1">
          <button className="btn button">{item.name}</button>
        </a>
      ))}
    </div>
  </div>
);
export default Card;
