import React, { Component } from "react";
import CV from "./components/CV";
import Form from "./components/Form";
import { findObjectInArrayWith } from "./utils";
export class App extends Component {
  constructor(props) {
    super(props);

    this.counter = 0;
    this.state = {
      personalDetailsFields: {
        imgSrc: "",
        nameField: "John Doe",
        emailField: "johndoe@gmail.com",
        currentJobField: "Senior Software Engineer",
        phoneNumberField: "+123 12345",
        aboutField:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta obcaecati sint officiis fuga quia sapiente rerum eius enim? Veniam.",
        skills: ["HTML", "CSS", "ReactJS", "English", "Arabic"],
      },
      educationalFields: [
        this.createEducationalFields(
          {
            schoolName: "Famous school Name",
            degreeName: "Master's",
            startDate: "2012",
            endDate: "2014",
          },
          0
        ),
        this.createEducationalFields(
          {
            schoolName: "Famous school Name 2",
            degreeName: "Bachelor's",
            startDate: "2008",
            endDate: "2012",
          },
          1
        ),
      ],
      experienceFields: [
        this.createExperienceFields({
          companyName: "Google",
          positionTitle: "Software Engineer",
          description: "Maintain google's search engine",
          startDate: "2015",
          endDate: "2017",
        }),
        this.createExperienceFields({
          companyName: "Meta",
          positionTitle: "Senior Software Engineer",
          description: "Develop VR applications",
          startDate: "2017",
          endDate: "present",
        }),
      ],
    };

    this.changePersonalDetails = this.changePersonalDetails.bind(this);
    this.changeEducationalFields = this.changeEducationalFields.bind(this);
    this.changeExperienceFields = this.changeExperienceFields.bind(this);
    this.createEducationalFields = this.createEducationalFields.bind(this);
    this.createExperienceFields = this.createExperienceFields.bind(this);
    this.addEducationalFields = this.addEducationalFields.bind(this);
    this.addExperienceFields = this.addExperienceFields.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.changeSkills = this.changeSkills.bind(this);
  }

  changeSkills(skills = "") {
    this.setState({
      ...this.state,
      personalDetailsFields: {
        ...this.state.personalDetailsFields,
        skills: skills.split("\n"),
      },
    });
  }

  onImageChange(e) {
    const imgSrc = URL.createObjectURL(e.target.files[0]);
    console.log(imgSrc);
    this.changePersonalDetails("imgSrc", imgSrc);
  }

  addEducationalFields(fields) {
    this.setState({
      ...this.state,
      educationalFields: [...this.state.educationalFields, fields],
    });
  }

  addExperienceFields(fields) {
    this.setState({
      ...this.state,
      experienceFields: [...this.state.experienceFields, fields],
    });
  }

  createEducationalFields({
    schoolName = "",
    degreeName = "",
    startDate = "",
    endDate = "",
  } = {}) {
    return {
      id: this.counter++,
      fields: {
        schoolNameField: schoolName,
        degreeNameField: degreeName,
        eduStartDateField: startDate,
        eduEndDateField: endDate,
      },
    };
  }

  createExperienceFields({
    companyName = "",
    positionTitle = "",
    description = "",
    startDate = "",
    endDate = "",
  } = {}) {
    return {
      id: this.counter++,
      companyNameField: companyName,
      positionTitleField: positionTitle,
      descriptionField: description,
      expStartDateField: startDate,
      expEndDateField: endDate,
    };
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

  changeEducationalFields(fieldGroupId, fieldName, newValue) {
    const foundFieldGroup = findObjectInArrayWith(
      this.state.educationalFields,
      {
        id: fieldGroupId,
      }
    );
    if (!foundFieldGroup && !foundFieldGroup.hasOwnProperty(fieldName)) return;

    this.setState({
      ...this.state,
      educationalFields: this.state.educationalFields.map((fieldGroup) => {
        if (fieldGroup.id === fieldGroupId) {
          return {
            ...fieldGroup,
            fields: {
              ...fieldGroup.fields,
              [fieldName]: newValue,
            },
          };
        }
        return fieldGroup;
      }),
    });
  }

  changeExperienceFields(id, fieldName, newValue) {
    if (!findObjectInArrayWith(this.state.experienceFields, { id })) return;

    this.setState({
      ...this.state,
      experienceFields: this.state.experienceFields.map((fields) => {
        if (fields.id === id) {
          return {
            ...fields,
            [fieldName]: newValue,
          };
        }
        return fields;
      }),
    });
  }

  render() {
    return (
      <>
        <Form
          personalDetailsFields={this.state.personalDetailsFields}
          changePersonalDetails={this.changePersonalDetails}
          educationalFields={this.state.educationalFields}
          changeEducationalFields={this.changeEducationalFields}
          addEducationalFields={() => {
            this.addEducationalFields(this.createEducationalFields());
          }}
          experienceFields={this.state.experienceFields}
          changeExperienceFields={this.changeExperienceFields}
          addExperienceFields={() => {
            this.addExperienceFields(this.createExperienceFields());
          }}
          onImageChange={this.onImageChange}
          changeSkills={this.changeSkills}
        />

        <CV
          personalDetailsFields={this.state.personalDetailsFields}
          educationalFields={this.state.educationalFields}
          experienceFields={this.state.experienceFields}
        />

        <button
          className="print-btn clickable"
          onClick={() => {
            window.print();
          }}
        >
          <i className="fa-solid fa-print"></i>
        </button>
      </>
    );
  }
}

export default App;
