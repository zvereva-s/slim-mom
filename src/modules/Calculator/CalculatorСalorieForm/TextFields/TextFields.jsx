import FormField from "../../../../shared/components/FormField";
import { fields } from "../fields";

function TextFields({ handleChange, state }) {
  const textFields = fields.map((el) => (
    <FormField
      key={el.label}
      handleChange={handleChange}
      value={state[el.name]}
      placeholder={el.placeholder}
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
