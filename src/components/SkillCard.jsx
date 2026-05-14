import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes = "" }) => {
  return (
    <div className={`skill-card group ${classes}`}>
      <figure className="skill-icon-box">
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
          className="skill-icon"
        />
      </figure>

      <div className="skill-content">
        <h3 className="skill-label">{label}</h3>
        <p className="skill-desc">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;