import useAuthState from "../../shared/hooks/useAuthState";

import Calculator from "../../modules/Calculator";
import RightSideBar from "../../modules/RightSideBar";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

function CalculatorPage() {

  const { isLogin } = useAuthState();
  const title = "Calculate your daily calorie intake right now";

  return (
    <Main>
      <Section className="mobile-section-auth">
        <Container>
          <Title text={title} />
          <Calculator />
        </Container>
      </Section>

      {isLogin && (
        <Section className="right-side-bar-section">
          <Container>
            <RightSideBar />
          </Container>
        </Section>
      )}
    </Main>
  );
}
export default CalculatorPage;
