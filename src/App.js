import { Component } from "react";
import InputField from "./components/InputField";
import { getSectionsAndFields } from "./utilities";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getSectionsAndFields(),
    };

    this.changeField = this.changeField.bind(this);
  }

  changeField(sectionId, fieldId, newValue) {}

  render() {
    return (
      <div className="App">
        <form>
          {this.state.data.personalDetailsSection.fields.map(
            (fieldsArr, index) => {
              return (
                <div key={index}>
                  {fieldsArr.map((fieldName) => {
                    const field = this.state.data.fields[fieldName];
                    return (
                      <InputField
                        key={field.fieldId}
                        fieldId={field.id}
                        initialValue={field.value}
                        type={field.type}
                        placeholder={field.label}
                        name={field.name}
                        onFieldChange={this.changeField}
                      />
                    );
                  })}
                </div>
              );
            }
          )}
        </form>
        <br />
        <br />
        {/* {this.state.fields.map((field) => {
          return (
            <div key={field.id}>
              {field.label}: {field.value}
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default App;
