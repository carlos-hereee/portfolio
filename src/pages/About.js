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
    <section className="container mb-4">
      <div className="text-center">
        <div className="card-glass">
          <h3 className="text-center">Who am I?</h3>
          <img
            src={profile.avatar_url}
            alt="Carlos Hernandez"
            className="profile__photo m-4"
          />
          <p className="text-center mt-1">{profile.bio}</p>
          <h3>About Me</h3>
          <div className="text-left">
            <p>{ch04937.about.header}</p>
            <p>{ch04937.about.why}</p>
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
      </div>
    </section>
  );
};
export default AboutMe;
