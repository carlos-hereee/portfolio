import React, { useEffect, useState } from "react";
import shortid from "shortid";
import Skill from "../components/Skill";
import Social from "../components/Social";
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
    <section>
      <div className="about-me">
        <div>
          <h3>Who am I?</h3>
          <img
            src={profile.avatar_url}
            alt="Carlos Hernandez"
            className="profile__photo"
          />
          <p className="text-center mt-1">{profile.bio}</p>
          <Social />
        </div>
        <div>
          <h3>About Me</h3>
          <p>{ch04937.about.header}</p>
          <h3>What brought me here?</h3>
          <p>{ch04937.about.reason}</p>
          <h3>Why I enjoy coding?</h3>
          <p>{ch04937.about.why}</p>
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
