import PropTypes from "prop-types";

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download = false,
  onClick,
  type = "button",
}) => {
  const className = `btn btn-primary ${classes}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={className}
        download={download || undefined}
        onClick={onClick}
      >
        <span>{label}</span>

        {icon && (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      <span>{label}</span>

      {icon && (
        <span
          className="material-symbols-rounded"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
    </button>
  );
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download = false,
  onClick,
  type = "button",
}) => {
  const className = `btn btn-outline ${classes}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={className}
        download={download || undefined}
        onClick={onClick}
      >
        <span>{label}</span>

        {icon && (
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      <span>{label}</span>

      {icon && (
        <span
          className="material-symbols-rounded"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
    </button>
  );
};

ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export {
  ButtonPrimary,
  ButtonOutline,
};