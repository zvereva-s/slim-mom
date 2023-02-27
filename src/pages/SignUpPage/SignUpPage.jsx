import classNames from "classnames";

import useTheme from "../../shared/hooks/useTheme";
import useTranslate from "../../shared/hooks/useTranslate";

import SignUp from "../../modules/SignUp";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import s from "./signUpPage.module.scss";

function SignUpPage() {
  const { t } = useTranslate();
  const { theme } = useTheme();

  return (
    <Main>
      <Section>
        <Container>
          <Title
            text={t.signUpTitle}
            className={classNames(s.title, s[`title-${theme}`])}
          />
          <SignUp />
        </Container>
      </Section>
    </Main>
  );
}
export default SignUpPage;
