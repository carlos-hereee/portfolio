import React, { useEffect, useState } from "react";
import ch04937 from "../data/ch04937.json";
import shortid from "shortid";
import "../stylesheets/pages.scss";

export default function AboutMe() {
  const [profile, setProfile] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
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
          setError(error);
        }
      );
  }, []);
  const data = ch04937.about;

  return error ? (
    <div>ERROR: {error.message}</div>
  ) : !isLoaded ? (
    <div>Loading ... </div>
  ) : (
    <div className="about-me">
      <div className="about-me-profile-container">
        <img
          src={profile.avatar_url}
          alt="Carlos Hernandez profile"
          className="profile"
        />
        <p>{profile.bio}</p>
      </div>
      <div className="about-me-content">
        <h3>About Me</h3>
        <p>{`${data.header}, ${data.subHeader}`}</p>
        <h3>What brought me here?</h3>
        <p>{data.reason}</p>
        <h3>Why I enjoy coding?</h3>
        <p>{data.why}</p>
        <h1>MY TECH SKILLS</h1>
        <div className="skills">
          {data &&
            data.skills.map((item) => <p key={shortid.generate()}>{item} |</p>)}
        </div>
      </div>
    </div>
  );
}
