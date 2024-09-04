import SocialMediaBar from "./SocialMediaBar";
import transition from "../transition";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <SocialMediaBar />

        <div className="main-picture-div">
          <div className="main-picture-frame">
            <div id="main-picture"></div>
          </div>
        </div>

        <div className="introduction-section">
          <p>Hello, my name is</p>
          <h1 className="introduction-header">Nasser Ali</h1>
          <p className="introduction-paragraph">
            I am a <strong>dedicated</strong> and <strong>versatile</strong>{" "}
            Junior Software Developer with a passion for{" "}
            <strong>problem-solving</strong> and commitment to{" "}
            <strong>continuous learning</strong>. I am{" "}
            <strong>seeking an internship</strong> position in the software
            development field to help me <strong>develop my skills</strong> and{" "}
            <strong>contribute to innovative projects</strong>. My journey has
            equipped me with a strong blend of{" "}
            <strong>technical expertise</strong> and{" "}
            <strong>a wide array of skills</strong> that sharpened my ability to{" "}
            <strong>collaborate</strong> and <strong>thrive</strong> in dynamic
            environments.
          </p>
          <a id="resume-link" href="./Nas_Resume.pdf">
            <button id="resume-button">View Resumé</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default transition(Home);
