import React, { Component } from "react";
import FormField from "./FormField";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.composeEducationFields = this.composeEducationFields.bind(this);
    this.composeExperienceFields = this.composeExperienceFields.bind(this);
  }

  composeEducationFields(id) {
    if (!this.props.educationalFields[id]) return null;

    const fields = this.props.educationalFields[id];

    const onInputChange = (fieldName = "", newValue) => {
      this.props.changeEducationalFields(
        id,
        fieldName.slice((id + "").length),
        newValue
      );
    };

    return (
      <div key={id}>
        <h3>Education {Number(id) + 1}</h3>
        <FormField
          id={id + "schoolNameField"}
          label={"School Name: "}
          type="text"
          inputName="schoolName-input"
          value={fields.schoolNameField}
          onInputChange={onInputChange}
        />
        <FormField
          id={id + "degreeNameField"}
          label={"Degree Name: "}
          type="text"
          inputName="degreeName-input"
          value={fields.degreeNameField}
          onInputChange={onInputChange}
        />
        <FormField
          id={id + "eduStartDateField"}
          label={"Start Date: "}
          type="text"
          inputName="eduStartDate-input"
          value={fields.eduStartDateField}
          onInputChange={onInputChange}
        />
        <FormField
          id={id + "eduEndDateField"}
          label={"End Date: "}
          type="text"
          inputName="eduEndDate-input"
          value={fields.eduEndDateField}
          onInputChange={onInputChange}
        />
      </div>
    );
  }

  composeExperienceFields(id) {
    if (!this.props.experienceFields[id]) return null;

    const fields = this.props.experienceFields[id];

    const onInputChange = (fieldName = "", newValue) => {
      this.props.changeExperienceFields(
        id,
        fieldName.slice((id + "").length),
        newValue
      );
    };

    return (
      <div key={id}>
        <h3>Experience {Number(id) + 1}</h3>
        <FormField
          id={id + "companyNameField"}
          label={"Company Name: "}
          type="text"
          inputName="companyName-input"
          value={fields.companyNameField}
          onInputChange={onInputChange}
        />
        <FormField
          id={id + "positionTitleField"}
          label={"Position Title: "}
          type="text"
          inputName="positionTitle-input"
          value={fields.positionTitleField}
          onInputChange={onInputChange}
        />
        <FormField
          id={id + "descriptionField"}
          label={"Description: "}
          type="textarea"
          inputName="description-input"
          value={fields.descriptionField}
          onInputChange={onInputChange}
        />
        <FormField
          id={id + "expStartDateField"}
          label={"Start Date: "}
          type="text"
          inputName="expStartDate-input"
          value={fields.expStartDateField}
          onInputChange={onInputChange}
        />
        <FormField
          id={id + "expEndDateField"}
          label={"End Date: "}
          type="text"
          inputName="expEndDate-input"
          value={fields.expEndDateField}
          onInputChange={onInputChange}
        />
      </div>
    );
  }

  render() {
    const { nameField, emailField, phoneNumberField, aboutField } =
      this.props.personalDetailsFields;

    return (
      <form>
        <fieldset>
          <legend>Personal Details</legend>
          <FormField
            id="nameField"
            label="Name: "
            type="text"
            inputName="name-input"
            value={nameField}
            onInputChange={this.props.changePersonalDetails}
          />
          <FormField
            id="emailField"
            label="Email: "
            type="email"
            inputName="email-input"
            value={emailField}
            onInputChange={this.props.changePersonalDetails}
          />
          <FormField
            id="phoneNumberField"
            label="Phone Number: "
            type="text"
            inputName="phoneNumber-input"
            value={phoneNumberField}
            onInputChange={this.props.changePersonalDetails}
          />
          <FormField
            id="aboutField"
            label="About: "
            type="textarea"
            inputName="about-input"
            value={aboutField}
            onInputChange={this.props.changePersonalDetails}
          />
        </fieldset>

        <fieldset>
          <legend>Educational Details</legend>
          {Object.keys(this.props.educationalFields).map(
            this.composeEducationFields
          )}
        </fieldset>

        <fieldset>
          <legend>Experience Details</legend>
          {Object.keys(this.props.experienceFields).map(
            this.composeExperienceFields
          )}
        </fieldset>
      </form>
    );
  }
}

export default Form;
