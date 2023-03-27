import React, { Component } from "react";
import CV from "./components/CV";
import Form from "./components/Form";
import { findObjectInArrayWith } from "./utils";

class Field {
  constructor({ id, name, label, type, value, isTextArea }) {
    this.id = id;
    this.name = name ?? this.id;
    this.label = label;
    this.type = type;
    this.value = value;
    this.isTextArea = isTextArea ?? false;
  }
}

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
      id: index,
      fields: [
        new Field({
          id: index + "schoolNameInput",
          label: "School Name: ",
          type: "text",
          value: schoolName,
        }),
        new Field({
          id: index + "degreeNameInput",
          label: "Degree Name: ",
          type: "text",
          value: degreeName,
        }),
        new Field({
          id: index + "eduStartDateInput",
          label: "Start Date: ",
          type: "text",
          value: startDate,
        }),
        new Field({
          id: index + "eduEndDateInput",
          label: "End Date: ",
          type: "text",
          value: endDate,
        }),
      ],
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

  changePersonalDetails(fieldId, newValue) {
    if (
      !findObjectInArrayWith(this.state.personalDetailsFields, {
        id: fieldId,
      })
    )
      return;

    this.setState({
      ...this.state,
      personalDetailsFields: this.state.personalDetailsFields.map((field) => {
        if (field.id === fieldId) {
          return new Field({ ...field, value: newValue });
        }
        return field;
      }),
    });
  }

  changeEducationalFields(fieldGroupId, fieldId, newValue) {
    if (
      !findObjectInArrayWith(this.state.educationalFields, { id: fieldGroupId })
    )
      return;

    this.setState({
      ...this.state,
      educationalFields: this.state.educationalFields.map((fieldGroup) => {
        if (fieldGroup.id === fieldGroupId) {
          return {
            ...fieldGroup,
            fields: fieldGroup.fields.map((field) => {
              if (field.id === fieldId) {
                return new Field({ ...field, value: newValue });
              }
              return field;
            }),
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
          nameField={this.state.personalDetailsFields[0]}
          currentJobField={this.state.personalDetailsFields[1]}
          emailField={this.state.personalDetailsFields[2]}
          phoneNumberField={this.state.personalDetailsFields[3]}
          aboutField={this.state.personalDetailsFields[4]}
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
