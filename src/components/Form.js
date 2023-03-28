import React, { Component } from "react";
import FormField from "./FormField";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.composeEducationFields = this.composeEducationFields.bind(this);
    this.composeExperienceFields = this.composeExperienceFields.bind(this);
  }

  composeEducationFields({ id, fields }, index) {
    if (!fields) return;
    const onInputChange = (fieldName = "", newValue) => {
      this.props.changeEducationalFields(
        id,
        fieldName.slice((id + "").length),
        newValue
      );
    };

    return (
      <div key={index} className="FieldGroup">
        <h3>Education {index + 1}</h3>
        <div key={index}>
          <FormField
            id={id + "schoolNameField"}
            label={"School Name: "}
            type="text"
            inputName="schoolNameInput"
            value={fields.schoolNameField}
            onInputChange={onInputChange}
          />
          <FormField
            id={id + "degreeNameField"}
            label={"Degree Name: "}
            type="text"
            inputName="degreeNameInput"
            value={fields.degreeNameField}
            onInputChange={onInputChange}
          />
          <FormField
            id={id + "eduStartDateField"}
            label={"Start Date: "}
            type="textarea"
            inputName="eduStartDateInput"
            value={fields.eduStartDateField}
            onInputChange={onInputChange}
          />
          <FormField
            id={id + "eduEndDateField"}
            label={"End Date: "}
            type="text"
            inputName="eduEndDateInput"
            value={fields.eduEndDateField}
            onInputChange={onInputChange}
          />
        </div>
      </div>
    );
  }

  composeExperienceFields(fields, index) {
    if (!fields) return;

    const { id } = fields;

    const onInputChange = (fieldName = "", newValue) => {
      this.props.changeExperienceFields(
        id,
        fieldName.slice((id + "").length),
        newValue
      );
    };

    return (
      <div key={id} className="FieldGroup">
        <h3>Experience {index + 1}</h3>
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
    const {
      nameField,
      currentJobField,
      emailField,
      phoneNumberField,
      aboutField,
      skills,
    } = this.props.personalDetailsFields;

    return (
      <form className="cv__form">
        <fieldset>
          <legend>Personal Details</legend>
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={this.props.onImageChange}
          />
          <FormField
            id="nameField"
            label="Name: "
            type="text"
            inputName="name-input"
            value={nameField}
            onInputChange={this.props.changePersonalDetails}
          />
          <FormField
            id="currentJobField"
            label="Current Job: "
            type="text"
            inputName="currentJob-input"
            value={currentJobField}
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
          <FormField
            id="skillsInput"
            label="Enter your skills seprated by New Line ( enter )"
            type="textarea"
            inputName="skillsInput"
            value={skills.join("\n")}
            onInputChange={(id, value) => {
              this.props.changeSkills(value);
            }}
          />
        </fieldset>

        <fieldset>
          <legend>Educational Details</legend>
          {this.props.educationalFields.map(this.composeEducationFields)}
          <button onClick={this.props.addEducationalFields} type="button">
            Add New Education
          </button>
        </fieldset>

        <fieldset>
          <legend>Experience Details</legend>
          {this.props.experienceFields.map(this.composeExperienceFields)}
          <button onClick={this.props.addExperienceFields} type="button">
            Add New Experience
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
