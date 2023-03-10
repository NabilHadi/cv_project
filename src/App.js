import { Component } from "react";
import FormFieldset from "./components/FormFieldset";
import {
  getSectionsAndFields,
  createEducationalFieldGroup,
  createExperienceFieldGroup,
} from "./utilities";

/*
App state: {
  "section-1": {
    sectionId: string,
    sectionName: string,
    fieldGroups: [
      "fieldGroupName-1", "fieldGroupName-2"
    ],
  }
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
    this.getFieldGroup = this.getFieldGroup.bind(this);
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

  getFieldGroup(fieldGroupName) {
    return this.state.fieldGroups[fieldGroupName];
  }

  addNewEducationFieldGroup() {
    const edcucationFieldGroup = createEducationalFieldGroup();
    this.setState({
      educationalSection: {
        ...this.state.educationalSection,
        fieldGroups: [
          ...this.state.educationalSection.fieldGroups,
          edcucationFieldGroup.fieldGroupName,
        ],
      },
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
      experienceSection: {
        ...this.state.experienceSection,
        fieldGroups: [
          ...this.state.experienceSection.fieldGroups,
          experienceFieldGroup.fieldGroupName,
        ],
      },
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
        <form>
          <FormFieldset
            section={this.state.personalDetailsSection}
            getField={this.getFieldByName}
            getFieldGroup={this.getFieldGroup}
            onFieldChange={this.changeField}
          />
          <FormFieldset
            section={this.state.educationalSection}
            getField={this.getFieldByName}
            getFieldGroup={this.getFieldGroup}
            onFieldChange={this.changeField}
          />
          <FormFieldset
            section={this.state.experienceSection}
            getField={this.getFieldByName}
            getFieldGroup={this.getFieldGroup}
            onFieldChange={this.changeField}
          />
        </form>
        <button onClick={this.addNewEducationFieldGroup}>add education</button>
        <button onClick={this.addNewExperienceFieldGroup}>
          add experience
        </button>
        <br />
        <br />
        <section className="cv__view"></section>
      </div>
    );
  }
}

export default App;
