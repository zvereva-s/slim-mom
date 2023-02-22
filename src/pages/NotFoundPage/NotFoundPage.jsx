import classNames from "classnames";

import useTheme from "../../shared/hooks/useTheme";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";

import s from "./notFoundPage.module.scss";

function NotFoundPage() {
  const { theme } = useTheme();
  return (
    <Main>
      <Section>
        <Container>
          <h1 className={classNames(s.title, s[`title-${theme}`])}>
            Not Found Page
          </h1>
        </Container>
      </Section>
    </Main>
  );
}
export default NotFoundPage;
