import Diary from "../../modules/Diary";
import RightSideBar from "../../modules/RightSideBar";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";

function DiaryPage() {
  return (
    <Main>
      <Section className="mobile-section-auth">
        <Container>
          <Diary />
        </Container>
      </Section>
      <Section className="right-side-bar-section">
        <Container>
          <RightSideBar />
        </Container>
      </Section>
    </Main>
  );
}
export default DiaryPage;
