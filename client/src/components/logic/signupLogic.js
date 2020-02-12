const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validContactRegex = RegExp(/^\+\d{12}$/);

export const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val && (valid = false));
  return valid;
};
export const handleChange = (e, setErrors, err, setPassword, password) => {
  const { name, value } = e.target;
  let errors = err;
  switch (name) {
    case "name":
      errors.name =
        value.length < 5 ? "First Name must be 5 characters long" : null;
      break;

    case "email":
      errors.email = validEmailRegex.test(value) ? null : "Email is not Valid";
      break;
    case "contact":
      errors.contact = validContactRegex.test(value)
        ? null
        : "Please enter a valid phone no (+xxxxxxxxxxxx)";
      break;
    case "password":
      setPassword(value);
      errors.password =
        value.length < 8 ? "Password must be 8 characters long" : null;
      break;
    case "password2":
      errors.password2 = value === password ? null : "Passwords don't match";
      break;

    default:
      break;
  }
  setErrors({ ...errors });
};

