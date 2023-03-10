import PropTypes from "prop-types";
import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { id, textContent, classes, attributes, eventListeners, children } =
      this.props;

    return (
      <button
        id={id}
        {...attributes}
        {...eventListeners}
        className={"btn ".concat(...classes)}
      >
        {textContent}
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  eventListeners: {},
  textContent: "",
  id: "",
  classes: [],
  attributes: {},
};

Button.propTypes = {
  eventListeners: PropTypes.object,
  textContent: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.array,
  attributes: PropTypes.object,
};

export default Button;
