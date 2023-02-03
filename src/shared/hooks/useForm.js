import { useState } from "react";
import { adviceActivity, validateField } from "../services/utils/utils";

import PropTypes from "prop-types";

const useForm = ({ onSubmit, initialState }) => {
  const [state, setState] = useState({ ...initialState });
  const [error, setError] = useState({
    message: "",
    type: "",
    name: "",
  });
  const [advice, setAdvice] = useState({
    message: "",
    value: "",
  });

  const handleAdvice = ({ target }) => {
    const result = adviceActivity(target);
    setAdvice(result);
  };

  const validate = ({ target }) => {
    const { type, value, name } = target;
    const obj = validateField(type, value, name);
    setError(obj);
  };

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    let newValue = type === "checkbox" ? checked : value;
    if (type === "file") {
      newValue = target.files[0];
    }

    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({
      ...initialState,
    });
  };

  return {
    state,
    setState,
    handleChange,
    handleSubmit,
    reset,
    error,
    validate,
    advice,
    handleAdvice,
  };
};

export default useForm;

useForm.defaultProps = {
  onSubmit: () => {},
  initialState: {},
};
useForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};
