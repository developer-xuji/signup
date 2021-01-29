import React, { useState } from "react";

const withForm = (Fields) => (Component) => {
  const getInitialData = () =>
    Fields.reduce(
      (data, f) => ({
        ...data,
        [f.key]: {
          value: "",
          dirty: false,
        },
      }),
      { gender: { value: "", dirty: false } }
    );

  const Form = (props) => {
    const [data, setData] = useState({
      formData: getInitialData(),
      formDirty: "",
    });

    const valid = () => {
      const fieldHasErrorMessage = Fields.find((f) => getErrorMessage(f));
      return !fieldHasErrorMessage;
    };

    const getErrorMessage = (field) => {
      const { key, validations } = field;
      const { value } = data.formData[key];
      const invalidValidation = validations.find(
        (v) => !v.validator(value, data.formData)
      );

      if (!invalidValidation) {
        return null;
      }

      return invalidValidation.message;
    };

    return (
      <Component
        {...props}
        data={data.formData}
        formDirty={data.formDirty}
        valid={valid}
        getErrorMessage={getErrorMessage}
        setFormData={(event, key) =>
          setData({
            ...data,
            formData: {
              ...data.formData,
              [key]: {
                value: event.target.value,
                dirty: true,
              },
            },
          })
        }
      />
    );
  };

  return Form;
};

export default withForm;
