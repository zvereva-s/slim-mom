import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";

import s from "./notFoundPage.module.scss";

function NotFoundPage() {
  return (
    <Main>
      <Section>
        <Container>
          <h1 className={s.title}>Not Found Page</h1>
        </Container>
      </Section>
    </Main>
  );
}
export default NotFoundPage;
