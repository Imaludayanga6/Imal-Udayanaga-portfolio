import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  description,
  classes = "",
  onClick,
}) => {
  return (
    <article className={`project-card-wrapper ${classes}`}>
      <button
        type="button"
        className="project-card group"
        onClick={onClick}
        aria-label={`View details about ${title}`}
      >
        <figure className="project-card-image-box">
          <img
            src={imgSrc}
            alt={`${title} project preview`}
            loading="lazy"
            decoding="async"
            className="project-card-image"
          />

          <div
            className="project-card-image-overlay"
            aria-hidden="true"
          >
            <span className="project-card-preview-text">
              View project details
            </span>
          </div>
        </figure>

        <div className="project-card-body">
          <div className="project-card-header">
            <h3 className="project-card-title">
              {title}
            </h3>

            <div
              className="project-card-arrow"
              aria-hidden="true"
            >
              <span className="material-symbols-rounded">
                arrow_outward
              </span>
            </div>
          </div>

          {description && (
            <p className="project-card-description">
              {description}
            </p>
          )}

          <div
            className="project-card-tags"
            aria-label="Technologies used"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="project-card-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;