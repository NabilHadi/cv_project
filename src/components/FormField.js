import React, { Component } from "react";

export class FormField extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    this.props.onInputChange(e.target.id, e.target.value);
  }

  render() {
    const { id, label, type, inputName, value } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        {type === "textarea" ? (
          <textarea
            id={id}
            name={inputName}
            value={value}
            onChange={this.onInputChange}
          ></textarea>
        ) : (
          <input
            type={type}
            id={id}
            name={inputName}
            value={value}
            onChange={this.onInputChange}
          />
        )}
      </div>
    );
  }
}

export default FormField;
