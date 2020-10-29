import React from "react";
import { Icon } from "semantic-ui-react";
import styles from "../stylesheets/projects.module.scss";
import shortid from "shortid";
import data from "../data/ch04937.json";

export default function Projects() {
  const project = data.projects;
  return (
    <div>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.project}>
        {project &&
          project.map((item) => (
            <div className={styles.card} key={shortid.generate()}>
              <h3>{item.name}</h3>
              <h5>{item.tech_stack}</h5>
              <p>{item.description}</p>
              <div className={styles.actions}>
                <a href={item.project_url} className={styles.link}>
                  <button type="button" className={styles.btn}>
                    View Site
                  </button>
                </a>
                <a href={item.github_url} className={styles.link}>
                  <button type="button" className={styles.btn}>
                    <Icon name="github" size="large" />
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
