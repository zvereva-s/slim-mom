import useTranslate from "../../shared/hooks/useTranslate";

import SignUp from "../../modules/SignUp";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

function SignUpPage() {
  const { t } = useTranslate();

  return (
    <Main>
      <Section>
        <Container>
          <Title text={t.signUpTitle} nameClass="auth" />
          <SignUp />
        </Container>
      </Section>
    </Main>
  );
}
export default SignUpPage;
