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
            I am a <strong>creative</strong> and <strong>versatile</strong>{" "}
            Front-End Developer with a passion for creating{" "}
            <strong>accessible</strong> and <strong>user-centric</strong>{" "}
            design. I am <strong>seeking a front-end development</strong>{" "}
            position to help me{" "}
            <strong>contribute to innovative projects and </strong>
            <strong>develop my skills</strong> in web technologies. My{" "}
            <strong>technical background</strong> and focus on{" "}
            <strong>teamwork</strong> has prepared me to excel in{" "}
            <strong>fast-paced</strong> environments.
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
