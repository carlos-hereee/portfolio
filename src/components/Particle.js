import shortid from "shortid";

const Particle = () => (
  <section>
    {Array(100)
      .fill("particle")
      .map(() => (
        <div className="particle" key={shortid.generate()}>
          <div className="particle__circle" />
        </div>
      ))}
  </section>
);
export default Particle;
