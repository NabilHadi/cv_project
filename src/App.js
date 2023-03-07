import { Component } from "react";
import FormFieldset from "./components/FormFieldset";
import { getSectionsAndFields } from "./utilities";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...getSectionsAndFields(),
    };

    this.changeField = this.changeField.bind(this);
    this.getFieldByName = this.getFieldByName.bind(this);
  }

  changeField(sectionId, fieldId, newValue) {
    const enteries = Object.entries(this.state.fields);
    const fieldEntry = enteries.find((entry) => {
      return entry[1].fieldId === fieldId;
    });
    if (!fieldEntry) return;

    console.log(fieldEntry);

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

  render() {
    return (
      <div className="App">
        <form>
          <FormFieldset
            section={this.state.personalDetailsSection}
            getField={this.getFieldByName}
            onFieldChange={this.changeField}
          />
          <FormFieldset
            section={this.state.educationalSection}
            getField={this.getFieldByName}
            onFieldChange={this.changeField}
          />
        </form>
        <br />
        <br />
        {Object.values(this.state.fields).map((field) => {
          return (
            <div key={field.fieldId}>
              {field.label}: {field.value}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
