import { Container } from "react-bootstrap";
import "./Skills.scss";
// import reactLogo from "../../assets/react-logo.png";
import {
  FaReact,
  FaGithub,
  FaSass,
  FaPhp,
  FaHtml5,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";

import { SiDart } from "react-icons/si";

const Skills = () => {
  return (
    <Container>
      <div className="skills-container">
        <div className="skill-single">
          {/* <img src={reactLogo} alt="" /> */}
          <FaReact size={100} color={"#61DBFB"} />
          {/* <FaJsSquare size={100} color={"yellow"} /> */}
          <h2>React JS</h2>
        </div>
        <div className="skill-single">
          <FaGithub size={100} />
          <h2>Github</h2>
        </div>
        <div className="skill-single">
          <FaSass size={100} color={"#CD6799"} />
          <h2>Sass</h2>
        </div>
        <div className="skill-single">
          <FaHtml5 size={100} color={"#e34c26"} />
          <h2>HTML 5</h2>
        </div>
        <div className="skill-single">
          <FaPhp size={100} color={"#474A8A"} />
          <h2>PHP</h2>
        </div>
        <div className="skill-single">
          <FaWordpress size={100} color={"#00749C"} />
          <h2>PHP</h2>
        </div>
        <div className="skill-single">
          <FaNodeJs size={100} color={"#68A063"} />
          <h2>PHP</h2>
        </div>
        <div className="skill-single">
          <SiDart size={100} color={"#0075BA"} />
          <h2>Dart</h2>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
