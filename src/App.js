import React, { Component } from "react";
import Form from "./components/Form";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalDetailsFields: {
        nameField: "John Doe",
        emailField: "johndoe@gmail.com",
        phoneNumberField: "+123 12345",
        aboutField: "About me",
      },
      educationalFields: {
        0: {
          schoolNameField: "Famous school Name",
          degreeNameField: "Master's",
          eduStartDateField: "2012",
          eduEndDateField: "2014",
        },
        1: {
          schoolNameField: "Famous school Name",
          degreeNameField: "Bachelor's",
          eduStartDateField: "2008",
          eduEndDateField: "2012",
        },
      },
      experienceFields: {
        0: {
          companyNameField: "Google",
          positionTitleField: "Software Engineer",
          descriptionField: "Maintain google's search engine",
          expStartDateField: "2015",
          expEndDateField: "2017",
        },
        1: {
          companyNameField: "Meta",
          positionTitleField: "Senior Software Engineer",
          descriptionField: "Develop VR applications",
          expStartDateField: "2017",
          expEndDateField: "present",
        },
      },
    };

    this.changePersonalDetails = this.changePersonalDetails.bind(this);
    this.changeEducationalFields = this.changeEducationalFields.bind(this);
    this.changeExperienceFields = this.changeExperienceFields.bind(this);
  }

  changePersonalDetails(fieldName, newValue) {
    if (!this.state.personalDetailsFields.hasOwnProperty(fieldName)) return;

    this.setState({
      ...this.state,
      personalDetailsFields: {
        ...this.state.personalDetailsFields,
        [fieldName]: newValue,
      },
    });
  }

  changeEducationalFields(id, fieldName, newValue) {
    if (
      !this.state.educationalFields.hasOwnProperty(id) ||
      !this.state.educationalFields[id].hasOwnProperty(fieldName)
    )
      return;

    this.setState({
      ...this.state,
      educationalFields: {
        ...this.state.educationalFields,
        [id]: {
          ...this.state.educationalFields[id],
          [fieldName]: newValue,
        },
      },
    });
  }

  changeExperienceFields(id, fieldName, newValue) {
    if (
      !this.state.experienceFields.hasOwnProperty(id) ||
      !this.state.experienceFields[id].hasOwnProperty(fieldName)
    )
      return;

    this.setState({
      ...this.state,
      experienceFields: {
        ...this.state.experienceFields,
        [id]: {
          ...this.state.experienceFields[id],
          [fieldName]: newValue,
        },
      },
    });
  }

  render() {
    return (
      <div>
        <Form
          personalDetailsFields={this.state.personalDetailsFields}
          changePersonalDetails={this.changePersonalDetails}
          educationalFields={this.state.educationalFields}
          changeEducationalFields={this.changeEducationalFields}
          experienceFields={this.state.experienceFields}
          changeExperienceFields={this.changeExperienceFields}
        />

        <div>
          <h2>Personal Details</h2>
          <ul>
            {Object.entries(this.state.personalDetailsFields).map(
              ([fieldName, fieldValue]) => (
                <li key={fieldName}>
                  <strong>{fieldName}:</strong> {fieldValue}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
