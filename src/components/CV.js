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
                <i class="fa-solid fa-envelope fa-lg"></i>
                {this.props.personalDetailsFields.emailField}
              </p>
              <p className="cv__view__perosnal__phone-number">
                <i class="fa-solid fa-phone fa-lg"></i>
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
        </section>
      </div>
    );
  }
}

export default CV;
