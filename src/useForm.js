import { useState, useEffect } from 'react';
import Success from "./pages/Success";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // setErrors(validate(values));
    // setIsSubmitting(true);
    <Success />
  };

//   useEffect(
//     () => {
//       if (Object.keys(errors).length === 0 && isSubmitting) {
//         callback();
//       }
//     },
//     [errors]
//   );

  return { handleChange, handleSubmit,  values, errors };
};

export default useForm;