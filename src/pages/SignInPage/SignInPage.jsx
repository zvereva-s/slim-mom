import classNames from "classnames";

import useTranslate from "../../shared/hooks/useTranslate";
import useTheme from "../../shared/hooks/useTheme";

import SignIn from "../../modules/SignIn";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import s from "./signInPage.module.scss";

function SignInPage() {
  const { t } = useTranslate();
  const { theme } = useTheme();

  return (
    <Main>
      <Section>
        <Container>
          <Title
            text={t.signInTitle}
            className={classNames(s.title, s[`title-${theme}`])}
          />
          <SignIn />
        </Container>
      </Section>
    </Main>
  );
}
export default SignInPage;
