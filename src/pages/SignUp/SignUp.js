import styled from "styled-components";
import SignUpForm from "./components/SignUpForm";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  color: white;
`;

const DummyHeading = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 255, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 27px;
  }

  p {
    margin: 7vh 7vw;
    text-align: left;
  }
`;

const LoginDiv = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUp = (props) => {
  return (
    <Layout>
      <LoginDiv>
        <SignUpForm />
      </LoginDiv>
      <DummyHeading>
        <h2>Dummy Heading</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing eit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DummyHeading>
    </Layout>
  );
};

export default SignUp;
