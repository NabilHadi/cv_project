import { Component } from "react";
import CV from "./components/CV";
import Form from "./components/Form";
import {
  getSectionsAndFields,
  createEducationalFieldGroup,
  createExperienceFieldGroup,
} from "./utilities";

/*
App state: {
  sections: [
    {
    sectionId: string,
    sectionName: string,
    fieldGroups: [
      "fieldGroupName-1", "fieldGroupName-2"
    ],
    {
    sectionId: string,
    sectionName: string,
    fieldGroups: [
      "fieldGroupName-1", "fieldGroupName-2"
    ],
  }
  ]
  fieldGroups: {
    "fieldGroupName-1": [
      "fieldName-1", "fieldName-2"
    ]
    "fieldGroupName-2": [
      "fieldName-3", "fieldName-4"
    ]
  }
  fields: {
    "fieldName-1": {
      fieldId: string,
      name: string,
      label: string,
      value: string,
      type: string,
    },
    {
    "fieldName-2": {
      fieldId: string,
      name: string,
      label: string,
      value: string,
      type: string,
    },
  }
}
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...getSectionsAndFields(),
    };

    this.changeField = this.changeField.bind(this);
    this.getFieldByName = this.getFieldByName.bind(this);
    this.getFields = this.getFields.bind(this);
    this.getSectionFieldGroups = this.getSectionFieldGroups.bind(this);
    this.addNewEducationFieldGroup = this.addNewEducationFieldGroup.bind(this);
    this.addNewExperienceFieldGroup =
      this.addNewExperienceFieldGroup.bind(this);
  }

  changeField(fieldId, newValue) {
    const enteries = Object.entries(this.state.fields);
    const fieldEntry = enteries.find((entry) => {
      return entry[1].fieldId === fieldId;
    });
    if (!fieldEntry) return;

    this.setState({
      fields: {
        ...this.state.fields,
        [fieldEntry[0]]: {
          ...this.state.fields[fieldEntry[0]],
          value: newValue,
        },
      },
    });
  }

  getFieldByName(fieldName) {
    return this.state.fields[fieldName];
  }

  getFields(fieldGroupName) {
    return this.state.fieldGroups[fieldGroupName];
  }

  getSectionFieldGroups(sectionId) {
    const section = this.state.sections.find((s) => s.sectionId === sectionId);
    if (!section) return;

    return section.fieldGroups;
  }

  addNewEducationFieldGroup() {
    const edcucationFieldGroup = createEducationalFieldGroup();
    this.setState({
      sections: this.state.sections.map((sec) => {
        if (sec.sectionId === this.state.ids.educationSectionId) {
          return {
            ...sec,
            fieldGroups: [
              ...sec.fieldGroups,
              edcucationFieldGroup.fieldGroupName,
            ],
          };
        }
        return sec;
      }),
      fieldGroups: {
        ...this.state.fieldGroups,
        [edcucationFieldGroup.fieldGroupName]: [
          ...Object.keys(edcucationFieldGroup.fields),
        ],
      },
      fields: {
        ...this.state.fields,
        ...edcucationFieldGroup.fields,
      },
    });
  }

  addNewExperienceFieldGroup() {
    const experienceFieldGroup = createExperienceFieldGroup();
    this.setState({
      sections: this.state.sections.map((sec) => {
        if (sec.sectionId === this.state.ids.experienceSectionId) {
          return {
            ...sec,
            fieldGroups: [
              ...sec.fieldGroups,
              experienceFieldGroup.fieldGroupName,
            ],
          };
        }
        return sec;
      }),
      fieldGroups: {
        ...this.state.fieldGroups,
        [experienceFieldGroup.fieldGroupName]: [
          ...Object.keys(experienceFieldGroup.fields),
        ],
      },
      fields: {
        ...this.state.fields,
        ...experienceFieldGroup.fields,
      },
    });
  }

  composePersonalDetailsSection() {
    const section = this.state.sections.find(
      (s) => s.sectionId === this.state.ids.personalDetailsSectionId
    );
    const fields = this.getFields(section.fieldGroups[0]).map((fieldName) => {
      return this.getFieldByName(fieldName);
    });
    const nameField = fields.find((field) => field.name.startsWith("name"));
    const emailField = fields.find((field) => field.name.startsWith("email"));
    const phoneNumberField = fields.find((field) =>
      field.name.startsWith("phoneNumber")
    );
    const aboutField = fields.find((field) => field.name.startsWith("about"));

    return {
      name: nameField,
      email: emailField,
      phoneNumber: phoneNumberField,
      about: aboutField,
    };
  }

  composeEducationalSection() {
    const section = this.state.sections.find(
      (s) => s.sectionId === this.state.ids.educationSectionId
    );
    if (!section) return;

    return section.fieldGroups.map((fieldGroupName) => {
      const fields = this.getFields(fieldGroupName).map((fieldName) => {
        return this.getFieldByName(fieldName);
      });
      return {
        fieldGroupName,
        schoolName: fields.find((field) => field.name.startsWith("school")),
        degreeName: fields.find((field) => field.name.startsWith("degree")),
        startDate: fields.find((field) => field.name.startsWith("startDate")),
        endDate: fields.find((field) => field.name.startsWith("endDate")),
      };
    });
  }

  render() {
    this.composePersonalDetailsSection();
    return (
      <main className="App">
        <div>
          <Form
            sections={this.state.sections}
            getFieldByName={this.getFieldByName}
            getFields={this.getFields}
            onFieldChange={this.changeField}
            getSectionFieldGroups={this.getSectionFieldGroups}
            addNewEducationFieldGroup={this.addNewEducationFieldGroup}
            addNewExperienceFieldGroup={this.addNewExperienceFieldGroup}
            ids={this.state.ids}
          />
        </div>
        <CV
          personalDetails={this.composePersonalDetailsSection()}
          educational={this.composeEducationalSection()}
        />
      </main>
    );
  }
}

export default App;
