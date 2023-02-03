import FormField from "../../../../shared/components/FormField";
import { blood, gender, physicalActivity } from "../fields";

function RadioFields({ handleChange, type, handleAdvice, advice }) {
  let arr;
  switch (type) {
    case "blood":
      arr = blood;
      break;
    case "gender":
      arr = gender;
      break;
    case "physicalActivity":
      arr = physicalActivity;
      break;
    default:
      arr = [];
  }
  const radioFields = arr.map((el) => (
    <FormField
      key={el.label}
      handleChange={handleChange}
      label={el.label}
      type={el.type}
      name={el.name}
      value={el.value}
      handleAdvice={handleAdvice}
      advice={advice}
    />
  ));
  return <>{radioFields}</>;
}
export default RadioFields;
