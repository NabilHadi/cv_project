import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "./Button";
import FormFieldset from "./FormFieldset";

export class Form extends Component {
  render() {
    const {
      sections,
      getFieldByName,
      getFields,
      getSectionFieldGroups,
      onFieldChange,
      addNewEducationFieldGroup,
      addNewExperienceFieldGroup,
      ids,
    } = this.props;
    return (
      <form className="cv__form">
        {sections.map((section) => {
          return (
            <FormFieldset
              key={section.sectionId}
              sectionName={section.sectionName}
              fieldGroups={getSectionFieldGroups(section.sectionId)}
              getFieldByName={getFieldByName}
              getFields={getFields}
              onFieldChange={onFieldChange}
            >
              {section.sectionId === ids.educationSectionId ? (
                <Button
                  textContent="Add Education"
                  eventListeners={{
                    onClick: addNewEducationFieldGroup,
                  }}
                  attributes={{
                    type: "button",
                  }}
                />
              ) : null}
              {section.sectionId === ids.experienceSectionId ? (
                <Button
                  textContent="Add Experience"
                  eventListeners={{
                    onClick: addNewExperienceFieldGroup,
                  }}
                  attributes={{
                    type: "button",
                  }}
                />
              ) : null}
            </FormFieldset>
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
