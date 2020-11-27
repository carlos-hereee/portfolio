import React, { useEffect, useState } from "react";
import ch04937 from "../data/ch04937.json";
import shortid from "shortid";

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
  const data = ch04937.about;

  return !isLoaded ? (
    <div>Loading ... </div>
  ) : (
    <section className="about-me">
      <div className="about-me-profile-container">
        <img
          src={profile.avatar_url}
          alt="Carlos Hernandez profile"
          className="profile"
        />
        <p>{profile.bio}</p>
      </div>
      <div className="about-me-content-container">
        <div className="about-me-content">
          <h3>About Me</h3>
          <p>{data.header}</p>
          <h3>What brought me here?</h3>
          <p>{data.reason}</p>
          <h3>Why I enjoy coding?</h3>
          <p>{data.why}</p>
          <h3>MY TECH SKILLS</h3>
          <div className="skills">
            {data &&
              data.skills.map((item) => (
                <div className="skill">
                  <p key={shortid.generate()}>{item.name} </p>
                  <img
                    src={item.src}
                    alt={`icon of ${item.name}`}
                    className="icon"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
