import PropTypes from "prop-types";
import { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.initialValue,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });

    this.props.onFieldChange(this.props.fieldId, e.target.value);
  }

  render() {
    const { type, placeholder, name } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={this.state.inputValue}
        onChange={this.onInputChange}
      />
    );
  }
}

InputField.defaultProps = {
  type: "text",
  placeholder: "",
  name: "",
};

InputField.propTypes = {
  fieldId: PropTypes.string,
  initialValue: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onFieldChange: PropTypes.func,
};

export default InputField;
