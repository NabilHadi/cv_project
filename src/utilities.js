import uniqid from "uniqid";

export function createExperienceFieldGroup() {
  const id = uniqid();
  return {
    fieldGroupName: "experienceFieldGroup-" + id,
    fields: {
      ["compnayNameField-" + id]: {
        fieldId: uniqid(),
        name: "compnayName-" + id,
        label: "Compnay Name",
        value: "",
        type: "text",
      },
      ["positionTitleField-" + id]: {
        fieldId: uniqid(),
        name: "positionTitle-" + id,
        label: "Position Title",
        value: "",
        type: "text",
      },
      ["descriptionField-" + id]: {
        fieldId: uniqid(),
        name: "description-" + id,
        label: "description",
        value: "",
        type: "text",
      },
      ["startDateField-" + id]: {
        fieldId: uniqid(),
        name: "startDate-" + id,
        label: "Start Date",
        value: "",
        type: "text",
      },
      ["endDateField-" + id]: {
        fieldId: uniqid(),
        name: "endDate-" + id,
        label: "End Date",
        value: "",
        type: "text",
      },
    },
  };
}

export function createEducationalFieldGroup() {
  const id = uniqid();
  return {
    fieldGroupName: "educationalFieldGroup-" + id,
    fields: {
      ["schoolNameField-" + id]: {
        fieldId: uniqid(),
        name: "schoolName-" + id,
        label: "School Name",
        value: "",
        type: "text",
      },
      ["degreeNameField-" + id]: {
        fieldId: uniqid(),
        name: "degreeName-" + id,
        label: "Degree Name",
        value: "",
        type: "text",
      },
      ["startDateField-" + id]: {
        fieldId: uniqid(),
        name: "startDate-" + id,
        label: "Start Date",
        value: "",
        type: "text",
      },
      ["endDateField-" + id]: {
        fieldId: uniqid(),
        name: "endDate-" + id,
        label: "End Date",
        value: "",
        type: "text",
      },
    },
  };
}

export function createPersonalDetailsFieldGroup() {
  const id = uniqid();
  return {
    fieldGroupName: "personalDetialsFieldGroup-" + id,
    fields: {
      ["nameField-" + id]: {
        fieldId: uniqid(),
        name: "name-" + id,
        label: "Name",
        value: "",
        type: "text",
      },
      ["emailField-" + id]: {
        fieldId: uniqid(),
        name: "email-" + id,
        label: "Email",
        value: "",
        type: "email",
      },
      ["phoneNumberField-" + id]: {
        fieldId: uniqid(),
        name: "phoneNumber-" + id,
        label: "Phone Number",
        value: "",
        type: "text",
      },
    },
  };
}

export function getSectionsAndFields() {
  const educationFieldGroup = createEducationalFieldGroup();
  const personalDetailsFieldGroup = createPersonalDetailsFieldGroup();
  const experienceFieldGroup = createExperienceFieldGroup();
  return {
    personalDetailsSection: {
      sectionId: uniqid(),
      sectionName: "Personal Details",
      fieldGroups: [personalDetailsFieldGroup.fieldGroupName],
    },
    educationalSection: {
      sectionId: uniqid(),
      sectionName: "Educational",
      fieldGroups: [educationFieldGroup.fieldGroupName],
    },
    experienceSection: {
      sectionId: uniqid(),
      sectionName: "Work Experience",
      fieldGroups: [experienceFieldGroup.fieldGroupName],
    },
    fieldGroups: {
      [personalDetailsFieldGroup.fieldGroupName]: [
        ...Object.keys(personalDetailsFieldGroup.fields),
      ],
      [educationFieldGroup.fieldGroupName]: [
        ...Object.keys(educationFieldGroup.fields),
      ],
      [experienceFieldGroup.fieldGroupName]: [
        ...Object.keys(experienceFieldGroup.fields),
      ],
    },
    fields: {
      ...personalDetailsFieldGroup.fields,
      ...educationFieldGroup.fields,
      ...experienceFieldGroup.fields,
    },
  };
}
