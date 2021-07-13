import { Container } from "react-bootstrap";
import "./Skills.scss";
import {
  FaReact,
  FaGithub,
  FaSass,
  FaHtml5,
  FaBootstrap,
  FaJs,
} from "react-icons/fa";

import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <Container>
      <div className="skills-container">
        <SkillCard
          txt={"Javascript"}
          icon={<FaJs size={100} color={"#f0db4f"} />}
        />

        <SkillCard
          txt={"React Js"}
          icon={<FaReact size={100} color={"#61DBFB"} />}
        />

        <SkillCard txt={"Github"} icon={<FaGithub size={100} />} />
        <SkillCard
          txt={"Sass"}
          icon={<FaSass size={100} color={"#CD6799"} />}
        />

        <SkillCard
          txt={"HTML 5"}
          icon={<FaHtml5 size={100} color={"#e34c26"} />}
        />

        <SkillCard
          txt={"Bootstrap"}
          icon={<FaBootstrap size={100} color={"#563d7c"} />}
        />
      </div>
    </Container>
  );
};

export default Skills;
