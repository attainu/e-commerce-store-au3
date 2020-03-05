//eslint-disable-next-line
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
    case "firstname":
      errors.firstname =
        value.length < 2 ? "First Name must be atleast 2 characters long" : null;
      break;
    case "lastname":
      errors.lastname =
        value.length < 2 ? "Last Name must be atleast 2 characters long" : null;
      break;

    case "email":
      errors.email = validEmailRegex.test(value) ? null : "Email is not Valid";
      break;
    case "mobile":
      errors.mobile = validContactRegex.test(value)
        ? null
        : "Please enter a valid mobile no (+xxxxxxxxxxxx)";
      break;
    case "password":
      setPassword(value);
      errors.password =
        value.length < 8 ? "Password must be atleast 8 characters long" : null;
      break;
    case "password2":
      errors.password2 = value === password ? null : "Passwords don't match";
      break;

    default:
      break;
  }
  setErrors({ ...errors });
};
