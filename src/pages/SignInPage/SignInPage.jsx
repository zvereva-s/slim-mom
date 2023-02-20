import useTranslate from "../../shared/hooks/useTranslate";

import SignIn from "../../modules/SignIn";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import s from "./signInPage.module.scss";

function SignInPage() {
  const { t } = useTranslate();
  return (
    <Main>
      <Section>
        <Container>
          <Title text={t.signInTitle} className={s.title} />
          <SignIn />
        </Container>
      </Section>
    </Main>
  );
}
export default SignInPage;
