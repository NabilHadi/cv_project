import { Component } from "react";
import Button from "./components/Button";
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

  render() {
    return (
      <div className="App">
        <Form
          sections={this.state.sections}
          getFieldByName={this.getFieldByName}
          getFields={this.getFields}
          onFieldChange={this.changeField}
          getSectionFieldGroups={this.getSectionFieldGroups}
        />
        <Button
          textContent="Add education"
          eventListeners={{
            onClick: this.addNewEducationFieldGroup,
          }}
        />
        <Button
          textContent="Add experience"
          eventListeners={{
            onClick: this.addNewExperienceFieldGroup,
          }}
        />
        <br />
        <br />
        <section className="cv__view"></section>
      </div>
    );
  }
}

export default App;
