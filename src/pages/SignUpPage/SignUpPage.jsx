import SignUp from "../../modules/SignUp";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import s from "./signUpPage.module.scss";

function SignUpPage() {
  return (
    <Main>
      <Section>
        <Container>
          <Title text="Sign Up" className={s.title} />
          <SignUp />
        </Container>
      </Section>
    </Main>
  );
}
export default SignUpPage;
