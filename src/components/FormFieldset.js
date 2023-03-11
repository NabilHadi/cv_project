import PropTypes from "prop-types";
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
    const { sectionName, fieldGroups, getFieldByName, getFields } = this.props;
    return (
      <fieldset>
        <legend>{sectionName}</legend>
        {fieldGroups.map((fieldGroupName, index) => {
          const fieldNames = getFields(fieldGroupName);
          return (
            <p key={index}>
              {fieldNames.map((fieldName) => {
                const field = getFieldByName(fieldName);
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

FormFieldset.defaultProps = {
  sectionName: "",
  fieldGroups: [],
};

FormFieldset.propTypes = {
  sectionName: PropTypes.string,
  fieldGroups: PropTypes.array,
  getFieldByName: PropTypes.func.isRequired,
  getFields: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default FormFieldset;
