import PropTypes from "prop-types";
import React, { Component } from "react";
import FormFieldset from "./FormFieldset";

export class Form extends Component {
  render() {
    const {
      sections,
      getFieldByName,
      getFields,
      getSectionFieldGroups,
      onFieldChange,
    } = this.props;
    return (
      <form>
        {sections.map((section) => {
          return (
            <FormFieldset
              key={section.sectionId}
              sectionName={section.sectionName}
              fieldGroups={getSectionFieldGroups(section.sectionId)}
              getFieldByName={getFieldByName}
              getFields={getFields}
              onFieldChange={onFieldChange}
            />
          );
        })}
      </form>
    );
  }
}

Form.propTypes = {
  sections: PropTypes.array,
  getFieldByName: PropTypes.func.isRequired,
  getFields: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default Form;
