import PropTypes from "prop-types";
import useTranslate from "../../../../shared/hooks/useTranslate";

import FormField from "../../../../shared/components/FormField";
import { fields } from "../fields";

function TextFields({ handleChange, state }) {
  const { lang } = useTranslate();
  const textFields = fields.map((el, idx) => (
    <FormField
      key={idx + 1}
      handleChange={handleChange}
      value={state[el.name]}
      placeholder={el.placeholder[lang]}
      name={el.name}
      type={el.type}
      maxLength={el.maxLength}
      min={el.min}
      max={el.max}
      required={el.required}
    />
  ));

  return <>{textFields}</>;
}
export default TextFields;

TextFields.defaultProps = {
  state: {},
  handleChange: () => {},
};
TextFields.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
};
