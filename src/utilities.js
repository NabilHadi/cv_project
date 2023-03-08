import uniqid from "uniqid";

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
  const educationFieldGroup1 = createEducationalFieldGroup(1);
  const personalDetailsFieldGroup1 = createPersonalDetailsFieldGroup(1);
  return {
    personalDetailsSection: {
      sectionId: uniqid(),
      sectionName: "Personal Details",
      fieldGroups: [personalDetailsFieldGroup1.fieldGroupName],
    },
    educationalSection: {
      sectionId: uniqid(),
      sectionName: "Educational",
      fieldGroups: [educationFieldGroup1.fieldGroupName],
    },
    fieldGroups: {
      [personalDetailsFieldGroup1.fieldGroupName]: [
        ...Object.keys(personalDetailsFieldGroup1.fields),
      ],
      [educationFieldGroup1.fieldGroupName]: [
        ...Object.keys(educationFieldGroup1.fields),
      ],
    },
    fields: {
      ...personalDetailsFieldGroup1.fields,
      ...educationFieldGroup1.fields,
    },
  };
}
