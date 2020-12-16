import React from "react";
import Card from "../components/Card";
import data from "../data/ch04937.json";
import shortid from "shortid";

const Projects = () => (
  <section className="project">
    <h1 className="project__header">Projects</h1>
    <div className="project__cards">
      {data.projects &&
        data.projects.map((item) => (
          <Card key={shortid.generate()} card={item} />
        ))}
    </div>
  </section>
);
export default Projects;
