import React from "react";
import Card from "../components/Card";
import data from "../ch04937.json";
import shortid from "shortid";

const Projects = () => (
  <section className="container projects mb-4" id="projects">
    <h1 className="text-center">Projects</h1>
    <div className="d-flex flex-wrap justify-content-around text-left">
      {data.projects &&
        data.projects.map((item) => (
          <Card key={shortid.generate()} card={item} />
        ))}
    </div>
  </section>
);
export default Projects;
