import useTranslate from "../../shared/hooks/useTranslate";
import useAuthState from "../../shared/hooks/useAuthState";

import Calculator from "../../modules/Calculator";
import RightSideBar from "../../modules/RightSideBar";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

function CalculatorPage() {
  const { t } = useTranslate();
  const { isLogin } = useAuthState();
  const title = t.calculatorTitle;

  return (
    <Main>
      <Section className="mobile-section-auth">
        <Container>
          <div className="wrapper-calendar">
            <Title text={title} />
            <Calculator />
          </div>
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
