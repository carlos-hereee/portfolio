const Skill = ({ skill }) => (
  <div className="skill">
    <p>{skill.name} </p>
    <img src={skill.src} alt={skill.name} className="skill__icon" />
  </div>
);

export default Skill;
