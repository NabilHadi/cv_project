import React, { Component } from "react";
import personIconSrc from "../proxy.jpg";

export class CV extends Component {
  render() {
    return (
      <div className="cv__view">
        <section className="cv__view__left-column">
          <div className="cv__view__personal__img__container dot">
            <img
              className="cv__view__personal__img"
              src={personIconSrc}
              alt=""
            />
          </div>
          <div className="cv__view__personal__txt_container dot">
            <h2 className="cv__view__perosnal__name">
              {this.props.personalDetailsFields.nameField}
            </h2>
            <p className="cv__view__perosnal__current-job">
              {this.props.personalDetailsFields.currentJobField}
            </p>
            <div>
              <h3 className="dot">Contacts</h3>
              <p className="cv__view__personal__email">
                <i className="fa-solid fa-envelope fa-lg"></i>
                {this.props.personalDetailsFields.emailField}
              </p>
              <p className="cv__view__perosnal__phone-number">
                <i className="fa-solid fa-phone fa-lg"></i>
                {this.props.personalDetailsFields.phoneNumberField}
              </p>
            </div>
          </div>
        </section>
        <section className="cv__view__right-column">
          <div className="cv__view__right__about">
            <h3 className="dot">About Me</h3>
            <p>{this.props.personalDetailsFields.aboutField}</p>
          </div>

          <div className="cv__view__education">
            <h3 className="dot">Education</h3>
            <ul className="cv__view__education__list">
              {Object.keys(this.props.educationalFields).map((key) => {
                const obj = this.props.educationalFields[key];
                return (
                  <li key={key}>
                    <h4 className="sm-dot">{obj.degreeNameField}</h4>
                    <p>{obj.schoolNameField}</p>
                    <div>
                      <span>{obj.eduStartDateField}</span>
                      {" - "}
                      <span>{obj.eduEndDateField}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="cv__view__experience">
            <h3 className="dot">Experience</h3>
            <ul className="cv__view__experience__list">
              {Object.keys(this.props.experienceFields).map((key) => {
                const obj = this.props.experienceFields[key];
                return (
                  <li key={key}>
                    <h4 className="sm-dot">{obj.positionTitleField}</h4>
                    <h5>{obj.companyNameField}</h5>
                    <p>{obj.descriptionField}</p>
                    <div>
                      <span>{obj.expStartDateField}</span>
                      {" - "}
                      <span>{obj.expEndDateField}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default CV;
