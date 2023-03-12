import React, { Component } from "react";
import cv__img from "../SgR86L3cbYoV4SKVbeh2--1--3uwox.jpg";

export class CV extends Component {
  render() {
    const { personalDetails, educational } = this.props;

    return (
      <section className="cv__view">
        <header>
          <div className="cv__view__header__content">
            <h1 className="cv__view__name">
              {personalDetails.name.value || "John Doe"}
            </h1>
            <p className="cv__view__email">
              {personalDetails.email.value || "johndoe@gmail.com"}
            </p>
            <p className="cv__view__phone-number">
              {personalDetails.phoneNumber.value || "+1234 1243"}
            </p>
            <p className="cv__view__about">
              {personalDetails.about.value || "about me"}
            </p>
          </div>
          <img src={cv__img} alt="" />
        </header>
        <div>
          <section>
            <h2>Experience</h2>
            <ul>
              <li>
                <h3>
                  <span>Job Title</span>, <span>Company Name</span>
                </h3>
                <p>
                  <span>start date</span> <span>end Date</span>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Education</h2>
            <ul>
              {educational.map((group) => {
                return (
                  <li key={group.fieldGroupName}>
                    <p>
                      <span>{group.schoolName.value}</span> -{" "}
                      <span>Start date</span>-<span>End date</span>
                    </p>
                  </li>
                );
              })}
              <li>
                <h3>degree name</h3>
                <p>
                  <span>School name</span> - <span>Start date</span>-
                  <span>End date</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </section>
    );
  }
}

export default CV;
