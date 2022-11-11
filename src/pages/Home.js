import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is John</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills"> 
      <h1> Skills </h1>
      <ol className="list">
        <li className="item">
            <h2>Front-End</h2>
            <span>
                HTML, CSS, NPM, StyledComponents, ReactJS, BootStrap
            </span>
        </li>
        <li className="item">
            <h2>Back-End</h2>
            <span>
                MS SQL, .NET, MYSQL, ASP.NET MVC, ASP.NET WEB API
            </span>
        </li>
        <li className="item">
            <h2>Languages</h2>
            <span>
                JavaScript, C#
            </span>
        </li>
      </ol>
      </div>
    </div>
  );
}

export default Home;
