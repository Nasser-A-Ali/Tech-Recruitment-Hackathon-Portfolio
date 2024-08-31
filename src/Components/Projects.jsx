import { useState } from "react";
import SocialMediaBar from "./SocialMediaBar";
import transition from "../transition";

const Projects = () => {
  // State to toggle between job and volunteer experience
  const [isWebApps, setIsWebApps] = useState(true);

  // Disables the ability to click the active button to prevent unnecessary re-renders
  const toggleExperience = () => {
    setIsWebApps((prevState) => !prevState);
  };

  return (
    <>
      <div className="projects-container">
        <SocialMediaBar />

        <aside className="projects-text">
          <h1>Projects</h1>
          <div className="white-bar"></div>
          <p>
            Here are some of the projects I have created, through which I have
            gained experience in web development, programming, and design. Check
            out the highlighted skills for each project to see what I used to
            create them.
          </p>
          <p>
            The portfolio website you are currently viewing was designed in
            Figma and developed in React.js, the code can be viewed on GitHub
            through{" "}
            <a
              href="https://github.com/Nasser-A-Ali/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link
            </a>
            . Some of the highlighted skills used in making it include{" "}
            <span className="yellow-text">
              React.js, React Hooks, React Router, HTML, CSS, CSS animations,
              @media queries, and DOM Manipulation.
            </span>{" "}
          </p>
          <p>
            {" "}
            I am also working on more new projects that I am excited to share
            soon.
          </p>
        </aside>

        <aside className="projects-scroller">
          <div className="toggle-container">
            <div className="toggle-buttons">
              <button
                className={`toggle-button ${isWebApps ? "active" : ""}`}
                onClick={!isWebApps ? toggleExperience : undefined}
                disabled={isWebApps} // Disables the active button
              >
                Web Applications
              </button>
              <button
                className={`toggle-button ${!isWebApps ? "active" : ""}`}
                onClick={isWebApps ? toggleExperience : undefined}
                disabled={!isWebApps} // Disables the active button
              >
                Console Applications
              </button>
            </div>
          </div>

          {isWebApps ? (
            <>
              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/tech_trends.jpg"
                    alt="Screenshot of the landing page of my 'Tech Trends' project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>Tech Trends React Webpage</h2>

                  <p>
                    An ecommerce website for a fictional tech store called "Tech
                    Trends". The website was designed in Figma and created using
                    React.js. It pulls products and their details from a JSON
                    file and displays them on the home page. The website also
                    includes a cart page that displays the items that users
                    added and displays the total cost of the items in the cart.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      React.js, React Hooks, React Server, React Router, HTML,
                      CSS, JavaScript, DOM Manipulation, Conditional Rendering
                    </span>
                  </p>

                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/Tech-Trends"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/the_local_restaurant.jpg"
                    alt="Screenshot of the landing page of my 'The Local Restaurant' project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>The Local Restaurant Webpage</h2>

                  <p>
                    This website was created for a fictional restaurant called
                    The Local Restaurant. It was designed in Figma first and
                    then developed using HTML, CSS, and vanilla JavaScript. Some
                    of the features of this website include a menu page that
                    pulls items and their details from a JSON file and appends
                    them through DOM manipulation and an order page that uses a
                    form, performs calculations, and returns an order summary.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      Figma, HTML, CSS, Forms, DOM Manipulation, JavaScript
                    </span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/The-Local-Restaurant-Webpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/dog_image_gallery.jpg"
                    alt="Screenshot of the landing page of my 'Dog Images Gallery' project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>Dog Images Gallery React App</h2>
                  <p>
                    This website was created using React.js and was designed as
                    a way to practice pulling data from an API. It uses the Dog
                    CEO API to fetch images of dogs based on the breed and
                    number of images selected by the user.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      React.js, API calls, HTML, CSS, JavaScript, DOM
                      Manipulation, Conditional Rendering
                    </span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/Dog-Images-Gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/task_tracker.jpg"
                    alt="Screenshot of the landing page of my 'Task Tracker' project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>Task Tracker React App</h2>
                  <p>
                    This website was created using React.js and was designed as
                    a way to practice REST API HTTP Methods. It allows users to
                    add, delete, and toggle reminders for tasks stored in a JSON
                    server.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      React.js, API calls, HTML, CSS, JavaScript, DOM
                      Manipulation, Conditional Rendering
                    </span>{" "}
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/Task-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/libyan_culture.jpg"
                    alt="Screenshot of the landing page of my 'Libyan Culture' webpage"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>Libyan Culture Webpage</h2>
                  <p>
                    This website was one of my first websites created as a way
                    to practice HTML and CSS. It showcases the culture of my
                    home country, Libya.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">HTML, CSS</span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/Libyan-Culture-Webpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/ferrari_la_ferrari.jpg"
                    alt="Screenshot of the landing page of my 'Ferrari La Ferrari' project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>Ferrari La Ferrari Webpage</h2>
                  <p>
                    This website was created as a way to practice using Figma to
                    plan the design of a webpage. It showcases the Ferrari La
                    Ferrari, a limited-edition hybrid sports car. The website
                    was created using HTML and CSS. Only three pages were
                    created: the home page, the features page, and the find your
                    nearest dealer page.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">Figma, HTML, CSS</span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/Ferrari-La-Ferrari-Webpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/newfoundland_events.jpg"
                    alt="Screenshot of the landing page of my group's 'Newfoundland Tourism' webpage"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>Newfoundland Webpage</h2>
                  <p>
                    This website was the first website I created as part of a
                    group. It showcases the province of Newfoundland and
                    Labrador, Canada. The website was created using HTML and
                    CSS. I was responsible for designing and developing the
                    "events" page.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      HTML, HTML tables, CSS, collaboration
                    </span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/Newfoundland-Tourism-Webpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/hab_taxi_services.png"
                    alt="Screenshot of the my group's 'HAB Taxi Services' Python project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>HAB Taxi Services Program</h2>
                  <p>
                    Created as a final group project for the first semester's
                    "Python Programming" course at Keyin College. This program
                    was created as a collaborative effort between six members
                    including myself, options 4, 5, and 7 are not available. My
                    contributions are detailed in the README file for this repo.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      Python, Modular Programming, Functional Programming, Input
                      Validation, Formatted String Literals, Formatted Output,
                      Iterative Statements (Loops), Debugging, Collaboration
                    </span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/HAB-Taxi-Services-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/one_stop_insurance_company.png"
                    alt="Screenshot of the my 'One Stop Insurance Company' Python project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>One Stop Insurance Company Program</h2>
                  <p>
                    The requirements that were followed to create this program
                    can be found in the PDF file for this repo. This program
                    requests some values, imports another file that was created
                    to validate them, uses functions to perform calculations,
                    and displays the results in a neatly formatted output.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      Python, Modular Programming, Functional Programming, Input
                      Validation, Formatted String Literals, Formatted Output,
                      Iterative Statements (Loops)
                    </span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/One-Stop-Insurance-Company-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>

              <div className="singular-project-container">
                <div className="singular-project-image">
                  <img
                    src="./images/projects/honest_harry_car_sales.png"
                    alt="Screenshot of the my 'Honest Harry' Python project"
                  />
                </div>
                <div className="singular-project-text">
                  <h2>Honest Harry Car Sales Python Program</h2>
                  <p>
                    The requirements that were followed to create this program
                    can be found in the PDF file for this repo. This program
                    requests some values, validates them, performs calculations,
                    and displays the results in a neatly formatted output.
                  </p>
                  <p className="underlined">
                    <u>Highlighted skills</u>:{" "}
                    <span className="highlighted-skills">
                      Python, Input Validation, Formatted String Literals,
                      Formatted Output, Iterative Statements (Loops)
                    </span>
                  </p>
                  <a
                    className="button"
                    href="https://github.com/Nasser-A-Ali/Honest-Harry-Car-Sales-Project/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on GitHub</button>
                  </a>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  );
};

export default transition(Projects);
