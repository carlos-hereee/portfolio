import React, { useEffect, useState } from "react";
import shortid from "shortid";
import Skill from "../components/Skill";
import ch04937 from "../data/ch04937.json";

const AboutMe = () => {
  const [profile, setProfile] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://api.github.com/users/ch04937")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProfile(result);
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, []);
  return !isLoaded ? (
    <div>Loading ... </div>
  ) : (
    <section className="about-me">
      <div className="about-me__profile">
        <img
          src={profile.avatar_url}
          alt="Carlos Hernandez profile"
          className="profile__photo"
        />
        <p>{profile.bio}</p>
      </div>
      <div className="about-me__content">
        <h3>About Me</h3>
        <p>{ch04937.about.header}</p>
        <h3>What brought me here?</h3>
        <p>{ch04937.about.reason}</p>
        <h3>Why I enjoy coding?</h3>
        <p>{ch04937.about.why}</p>
      </div>
      <div className="about-me__skills">
        <h3 className="skills__title">MY TECH SKILLS</h3>
        <div className="skills__content">
          {ch04937.about.skills &&
            ch04937.about.skills.map((item) => (
              <Skill key={shortid.generate()} skill={item} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
