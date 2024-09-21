import SocialMediaBar from "./SocialMediaBar";
import { useState } from "react";
import transition from "../transition";

const SkillsAndExperience = () => {
  // State to toggle between job and volunteer experience
  const [isJobExperience, setIsJobExperience] = useState(true);

  // Disables the ability to click the active button to prevent unnecessary re-renders
  const toggleExperience = () => {
    setIsJobExperience((prevState) => !prevState);
  };

  return (
    <>
      <div className="experience-and-skills-container">
        <SocialMediaBar />

        <aside className="experience-and-skills-text">
          <h1>Skills & Experience</h1>
          <div className="white-bar"></div>
          <section>
            <h2>Education</h2>
            <ul>
              <li>
                Accelerated Software Development - Keyin College{" "}
                <span className="yellow-text">(2024 - 2025)</span>.
              </li>
              <li>
                Bachelor of Arts & Science (Spanish & Psychology) - Memorial
                University of Newfoundland{" "}
                <span className="yellow-text">(2016 - 2023)</span>.
              </li>
              <li>
                IB program - Westdale Secondary School{" "}
                <span className="yellow-text">(2012 - 2015)</span>.
              </li>
            </ul>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              <li>
                <u>
                  <strong>Programming Languages & Frameworks</strong>
                </u>
                : Python, HTML, CSS, JavaScript, React.js, Git Bash.
              </li>

              <li>
                <u>
                  <strong>Methodologies & Principles</strong>
                </u>
                : RESTful APIs, Object Oriented Programming, and Database
                Design.
              </li>

              <li>
                <u>
                  <strong>Software Tools</strong>
                </u>
                : Amazon Web Services, Git, and GitHub.
              </li>
            </ul>
          </section>
          <section>
            <h2>Certifications & Qualifications</h2>
            <p>
              Here are some miscellaneous certifications and qualifications I
              have obtained through the years:
            </p>
            <ul>
              <li>
                <strong>AWS</strong> Academy Graduate - AWS Academy Cloud
                Foundations.
              </li>
              <li>
                Earned <strong>2nd Place</strong> in the 2024 Royal Canadian
                Navy Hackathon.
              </li>
              <li>
                <strong>Trilingual</strong> - fluent in English and Arabic,
                proficient in Spanish.
              </li>
              <li>
                Krav Maga & Wadō-ryū Karate <strong>Black Belt</strong>.
              </li>
            </ul>
          </section>
        </aside>

        <aside className="job-experience-scroller">
          <div className="toggle-container">
            <div className="toggle-buttons">
              <button
                className={`toggle-button ${isJobExperience ? "active" : ""}`}
                onClick={!isJobExperience ? toggleExperience : undefined}
                disabled={isJobExperience} // Disables the active button
              >
                Job Experience
              </button>
              <button
                className={`toggle-button ${!isJobExperience ? "active" : ""}`}
                onClick={isJobExperience ? toggleExperience : undefined}
                disabled={!isJobExperience} // Disables the active button
              >
                Volunteer Experience
              </button>
            </div>
          </div>

          {isJobExperience ? (
            <>
              <div className="singular-job-container">
                <div className="singular-job-text">
                  <h2>Donor Care Associate @ Canadian Blood Services</h2>
                  <h5>2022 - Present</h5>
                  <ul>
                    <li>
                      Represented the company with professionalism and
                      positivity. Accompanied donors and socialized with them
                      throughout the donation process.
                    </li>

                    <li>
                      Managed donor medical history reviews, eligibility
                      screening, and confidential information, ensuring prompt
                      record updates.
                    </li>

                    <li>
                      Proficiently conducted blood collection, adhering to
                      sterile techniques and standard operating procedures.
                      Promptly addressed adverse donor reactions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="singular-job-container">
                <div className="singular-job-text">
                  <h2>Sales Staff Manager @ Traders Atlantic</h2>
                  <h5>2020 - 2022</h5>
                  <ul>
                    <li>
                      Established crucial rapport with customers, promoting
                      future account sales and negotiating favorable prices for
                      sales and loans.
                    </li>
                    <li>
                      Conducted inspections and purchased diverse valuable
                      merchandise, making collateral-based loans to individuals.
                    </li>
                    <li>
                      Thrived in a fast-paced, high-intensity environment, adept
                      at diffusing tense situations and displaying impeccable
                      appraisal skills.
                    </li>
                    <li>
                      Trained new hires and consistently achieved the highest
                      sales numbers, exceeding targets.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="singular-job-container">
                <div className="singular-job-text">
                  <h2>Front Desk Receptionist @ Greenbelt Tennis Club</h2>
                  <h5>2022 - 2023</h5>
                  <ul>
                    <li>
                      Welcomed and checked in guests, provided accurate
                      information, and addressed concerns promptly.
                    </li>
                    <li>
                      Managed booking software, maintained records, and
                      performed various administrative responsibilities.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="singular-job-container">
                <div className="singular-job-text">
                  <h2>President @ MUN Ballroom and Latin Dance Club</h2>
                  <h5>2022 - 2023</h5>
                  <ul>
                    <li>
                      Successfully led the club's recovery from a streak of
                      financial losses post-COVID-19, achieving record profits
                      and attendance.
                    </li>
                    <li>
                      Managed comprehensive aspects, including social media,
                      design work, bookings, and built strong relationships with
                      other organizations and club members.
                    </li>
                    <li>
                      Recruited and established a capable team to maintain
                      strong club performance, addressing issues in my absence
                      and effectively delegating tasks.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="singular-job-container">
                <div className="singular-job-text">
                  <h2>
                    Radiation Therapy QA Assitant @ Health Sciences Centre
                  </h2>
                  <h5>2017 - 2019</h5>
                  <ul>
                    <li>
                      Assisted with quality assurance of radiotherapy machines
                      including calibration.
                    </li>
                    <li>
                      Monitored and evaluated equipment; recorded any deviation
                      from normal through knowledge of proprietary software and
                      treatment procedures.
                    </li>

                    <li>
                      Communicated effectively with doctors, nurses, medical
                      physicists, and research partners.
                    </li>
                    <li>
                      Acted in the capacity of research assistant by helping
                      conduct some research, collecting and analyzing data,
                      summarizing other research.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="singular-job-container">
                <div className="singular-job-text">
                  <h2>Head Coach @ Special Olympics</h2>
                  <h5>2018 - 2019</h5>
                  <ul>
                    <li>
                      Organized and planed engaging and effective practice
                      sessions to help athletes develop their skills.
                    </li>
                    <li>
                      Motivated and encouraged athletes to push themselves,
                      evaluated their progress and helped them further improve.
                    </li>
                    <li>
                      Used communication, interpersonal skills along with
                      effective leadership to work closely with assistant
                      coaches as a team to ensure practice runs smoothly and
                      monitor athletes' progress.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="singular-job-container">
                <div className="singular-job-text">
                  <h2>President and Volunteer @ MUN Oxfam Group</h2>
                  <h5>2017 - 2023</h5>
                  <ul>
                    <li>
                      Organized and hosted social, charity, and educational
                      activities and events, raising funds for charity causes
                      with the goal of fighting inequality to end poverty and
                      injustice.
                    </li>
                    <li>
                      Built strong interpersonal relationships with team members
                      for efficient and effective teamwork.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  );
};

export default transition(SkillsAndExperience);
