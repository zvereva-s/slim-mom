import useTranslate from "../../shared/hooks/useTranslate";

import SignIn from "../../modules/SignIn";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

function SignInPage() {
  const { t } = useTranslate();

  return (
    <Main>
      <Section>
        <Container>
          <Title text={t.signInTitle} nameClass="auth" />
          <SignIn />
        </Container>
      </Section>
    </Main>
  );
}
export default SignInPage;
