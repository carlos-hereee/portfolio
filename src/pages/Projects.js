import React from "react";
import { Icon } from "semantic-ui-react";
import shortid from "shortid";
import data from "../data/ch04937.json";

const Projects = () => {
  const project = data.projects;
  return (
    <section>
      <h1 className="title">Projects</h1>
      <div className="project">
        {project &&
          project.map((item) => (
            <div className="card" key={shortid.generate()}>
              <h3>{item.name}</h3>
              <h5>{item.tech_stack}</h5>
              <p>{item.description}</p>
              <div className="actions">
                <a href={item.project_url} className="link">
                  <button type="button" className="btn">
                    View Site
                  </button>
                </a>
                {item.github_url && (
                  <a href={item.github_url} className="link">
                    <button type="button" className="btn">
                      <Icon name="github" size="large" />
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
export default Projects;
