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
              src={this.props.personalDetailsFields.imgSrc || personIconSrc}
              alt="profile pic"
            />
          </div>
          <div className="cv__view__personal__txt_container dot">
            <h2 className="cv__view__perosnal__name">
              {this.props.nameField.value}
            </h2>
            <p className="cv__view__perosnal__current-job">
              {this.props.currentJobField.value}
            </p>
            <div>
              <h3 className="dot">Contacts</h3>
              <p className="cv__view__personal__email">
                <i className="fa-solid fa-envelope fa-lg"></i>
                {this.props.emailField.value}
              </p>
              <p className="cv__view__perosnal__phone-number">
                <i className="fa-solid fa-phone fa-lg"></i>
                {this.props.phoneNumberField.value}
              </p>
            </div>
            <div>
              <h3 className="dot">Skills</h3>
              <ul className="cv__view__skills__ul">
                {this.props.personalDetailsFields.skills.map((skill, index) => {
                  return (
                    <li key={index} className="sm-dot">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="cv__view__right-column">
          <div className="cv__view__right__about">
            <h3 className="dot">About Me</h3>
            <p>{this.props.aboutField.value}</p>
          </div>

          <div className="cv__view__education">
            <h3 className="dot">Education</h3>
            <ul className="cv__view__education__list">
              {this.props.educationalFields.map(({ id, fields }) => {
                return (
                  <li key={fields.id}>
                    <h4 className="sm-dot">{fields.degreeNameField}</h4>
                    <p>{fields.schoolNameField}</p>
                    <div>
                      <span>{fields.eduStartDateField}</span>
                      {" - "}
                      <span>{fields.eduEndDateField}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="cv__view__experience">
            <h3 className="dot">Experience</h3>
            <ul className="cv__view__experience__list">
              {this.props.experienceFields.map((fields) => {
                return (
                  <li key={fields.id}>
                    <h4 className="sm-dot">{fields.positionTitleField}</h4>
                    <h5>{fields.companyNameField}</h5>
                    <p>{fields.descriptionField}</p>
                    <div>
                      <span>{fields.expStartDateField}</span>
                      {" - "}
                      <span>{fields.expEndDateField}</span>
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
