import { Component } from "react";
import InputField from "./InputField";

class FormFieldset extends Component {
  constructor(props) {
    super(props);

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(fieldId, newValue) {
    this.props.onFieldChange(fieldId, newValue);
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.section.sectionName}</legend>
        {this.props.section.fieldGroups.map((fieldGroupName, index) => {
          const fieldNames = this.props.getFieldGroup(fieldGroupName);
          return (
            <p key={index}>
              {fieldNames.map((fieldName) => {
                const field = this.props.getField(fieldName);
                if (!field) return null;

                return (
                  <InputField
                    key={field.fieldId}
                    fieldId={field.fieldId}
                    initialValue={field.value}
                    type={field.type}
                    placeholder={field.label}
                    name={field.name}
                    onFieldChange={this.onFieldChange}
                  />
                );
              })}
            </p>
          );
        })}
      </fieldset>
    );
  }
}

export default FormFieldset;
