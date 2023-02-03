export const fields = [
  {
    label: "Height *",
    name: "height",
    placeholder: "Height *",
    type: "number",
    minLength: "3",
    maxLength: "3",
    min: "100",
    max: "250",
    required: true,
  },
  {
    label: "Age *",
    name: "age",
    placeholder: "Age *",
    type: "number",
    minLength: "2",
    maxLength: "2",
    min: "16",
    max: "100",
    required: true,
  },
  {
    label: "Weight *",
    name: "weight",
    placeholder: "Weight *",
    type: "number",
    minLength: "2",
    maxLength: "3",
    min: "25",
    required: true,
  },
  {
    label: "Desired Weight *",
    name: "desiredWeight",
    placeholder: "Desired Weight *",
    type: "number",
    minLength: "2",
    maxLength: "3",
    min: "45",
    required: true,
  },
];

export const blood = [
  {
    label: "1",
    name: "bloodType",
    type: "radio",
    value: 1,
  },
  {
    label: "2",
    name: "bloodType",
    type: "radio",
    value: 2,
  },
  {
    label: "3",
    name: "bloodType",
    type: "radio",
    value: 3,
  },
  {
    label: "4",
    name: "bloodType",
    type: "radio",
    value: 4,
  },
];

export const gender = [
  {
    label: "male",
    name: "gender",
    type: "radio",
    value: "male",
  },
  {
    label: "female",
    name: "gender",
    type: "radio",
    value: "female",
  },
];

export const physicalActivity = [
  {
    label: "minimal",
    name: "physicalActivity",
    type: "radio",
    value: "1.2",
  },
  {
    label: "low",
    name: "physicalActivity",
    type: "radio",
    value: "1.375",
  },
  {
    label: "medium",
    name: "physicalActivity",
    type: "radio",
    value: "1.55",
  },
  {
    label: "high",
    name: "physicalActivity",
    type: "radio",
    value: "1.7",
  },
  {
    label: "extreme",
    name: "physicalActivity",
    type: "radio",
    value: "1.9",
  },
];

/* bloodType: {
    one: {
      label: "1",
      name: "one",
      type: "radio",
    },
    two: {
      label: "2",
      name: "two",
      type: "radio",
    },
    three: {
      label: "3",
      name: "three",
      type: "radio",
    },
    four: {
      label: "4",
      name: "four",
      type: "radio",
    },
  },*/
