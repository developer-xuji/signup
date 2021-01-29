import validator from "validator";

const FIELDS = [
  {
    key: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Your Name",
    validations: [
      {
        message: "Please enter your name",
        validator: (value) => !validator.isEmpty(value),
      },
    ],
  },
  {
    key: "email",
    label: "Email Address",
    type: "text",
    placeholder: "Email Address",
    validations: [
      {
        message: "Please enter a valid email",
        validator: (value) => validator.isEmail(value),
      },
    ],
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    validations: [
      {
        message: "Please confirm your password",
        validator: (value) => !validator.isEmpty(value),
      },
      {
        message: "Minimum 8 characters",
        validator: (value) => validator.isLength(value, { min: 8 }),
      },
    ],
  },
];

export default FIELDS;
