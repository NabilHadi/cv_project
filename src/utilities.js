import uniqid from "uniqid";

export function getSectionsAndFields() {
  return {
    personalDetailsSection: {
      sectionId: uniqid(),
      sectionName: "Personal Details",
      fields: [["nameField", "emailField", "phoneNumberField"]],
    },
    educationalSectopn: {
      sectionId: uniqid(),
      sectionName: "Educational",
      fields: [["schoolNameField", "degreeNameField"]],
    },
    fields: {
      nameField: {
        fieldId: uniqid(),
        name: "name",
        label: "Name",
        value: "",
        type: "text",
      },
      emailField: {
        fieldId: uniqid(),
        name: "email",
        label: "Email",
        value: "",
        type: "email",
      },
      phoneNumberField: {
        fieldId: uniqid(),
        name: "phoneNumber",
        label: "Phone Number",
        value: "",
        type: "text",
      },
      schoolNameField: {
        fieldId: uniqid(),
        name: "schoolName",
        label: "School Name",
        value: "",
        type: "text",
      },
      degreeNameField: {
        fieldId: uniqid(),
        name: "degreeName",
        label: "Degree Name",
        value: "",
        type: "text",
      },
    },
  };
}