import styled, { css } from "styled-components";

import FormItem from "./components/FormItem";
import Fields from "./components/Fields";
import TextInput from "./components/TextInput";
import withForm from "../../../../components/withForm";
import FIELDS from "./components/Fields";
import Selector from "./components/Selector";

const Layout = styled.div`
  display: flex;
  width: 50%;
  height: 70%;
  justify-content: center;
  align-items: left;
  text-align: left;
  flex-direction: column;
  color: black;

  form {
    width: 100%;
  }

  h2 {
    font-size: 27px;
  }

  a {
    color: blue;
    text-decoration: none;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  min-height: 50px;
  font-size: 18px;
  margin-bottom: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  height: auto;
  color: white;
  background: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.disabled === "disabled" &&
    css`
      background-color: gray;
      cursor: auto;
    `}
`;

const SignUpForm = (props) => {
  const { data, formDirty, setFormData, valid, getErrorMessage } = props;

  return (
    <Layout>
      <h2>Let's set up your account</h2>
      <p>
        Already have an account? <a href="/">Sign in</a>
      </p>
      {console.log(valid())}
      <form id="signUpForm">
        {Fields.map((f) => (
          <FormItem
            key={f.key}
            error={(formDirty || data[f.key].dirty) && getErrorMessage(f)}
          >
            <TextInput
              id={f.key}
              type={f.type}
              placeholder={f.placeholder}
              hasError={
                (formDirty || data[f.key].dirty) && getErrorMessage(f) !== null
              }
              onChange={(event) => {
                setFormData(event, f.key);
              }}
            />
          </FormItem>
        ))}
        <Selector
          required
          id="userType"
          form="signUpForm"
          onChange={(event) => {
            setFormData(event, "gender");
          }}
        >
          <option value="" disabled selected hidden>
            I would describe my user type as
          </option>
          <option value="developer">Developer</option>
          <option value="Manager">Manager</option>
        </Selector>
        <FormItem>
          <SubmitButton disabled={!valid() && "disabled"}>Next</SubmitButton>
        </FormItem>
      </form>
      <p>
        By clicking the "Next" button, you agree to creating a free account, and
        to <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
      </p>
    </Layout>
  );
};

const SignUpWithForm = withForm(FIELDS)(SignUpForm);

export default SignUpWithForm;
