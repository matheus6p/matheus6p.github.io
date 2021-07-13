/* eslint-disable jsx-a11y/anchor-is-valid */
import imgPreview from "../../assets/img-preview.jpg";
import { FaReact, FaSass, FaBootstrap, FaJs } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <a href="#" className="project-single">
      <div className="project-img-preview">
        <img src={imgPreview} alt="" />
      </div>

      <div className="project-info">
        <h4>Title</h4>
        <span className="mb-2">Level: </span>
        <span className="mb-2">
          Description: {""}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <span className="mb-2">Techs:</span>
        <div className="techs">
          <span className="tech-single">
            <FaJs size={100} color={"#f0db4f"} />
          </span>
          <span className="tech-single">
            <FaReact size={100} color={"#61DBFB"} />
          </span>
          <span className="tech-single">
            <FaBootstrap size={100} color={"#563d7c"} />
          </span>
          <span className="tech-single">
            <FaSass size={100} color={"#CD6799"} />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
