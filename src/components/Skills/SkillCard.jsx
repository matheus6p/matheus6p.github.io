const SkillCard = (props) => {
  return (
    <div className="skill-single">
      {props.icon}
      <h2>{props.txt}</h2>
    </div>
  );
};

export default SkillCard;
