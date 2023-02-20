import useTranslate from "../../shared/hooks/useTranslate";

import SignUp from "../../modules/SignUp";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import s from "./signUpPage.module.scss";

function SignUpPage() {
  const { t } = useTranslate();
  return (
    <Main>
      <Section>
        <Container>
          <Title text={t.signUpTitle} className={s.title} />
          <SignUp />
        </Container>
      </Section>
    </Main>
  );
}
export default SignUpPage;
