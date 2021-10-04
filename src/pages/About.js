import React, { useEffect, useState } from "react";
import shortid from "shortid";
import Skill from "../components/Skill";
import Social from "../components/Social";
import ch04937 from "../ch04937.json";

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
    <section className="container mb-4 about-me" id="about">
      <div className="text-center">
        <img
          src={profile.avatar_url}
          alt="Carlos Hernandez"
          className="profile__photo m-4"
        />
        <h3>Who am I?</h3>
        <div className="text-left">
          <p>{ch04937.about.header}</p>
          <p>{ch04937.about.why}</p>
          <p>{profile.bio}</p>
          <Social />
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
      </div>
    </section>
  );
};
export default AboutMe;
