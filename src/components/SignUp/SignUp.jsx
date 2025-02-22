import "./SignUp.scss";
import { useState, useId } from "react";

function SignUp({ closeModal }) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "*First Name is required";
    if (!formData.lastName) newErrors.lastName = "*Last Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "*Invalid email address";
    if (!formData.password) {
      newErrors.password = "*Password is required";
    } else {
      const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          "*Password must be at least 8 characters and contain a special character and a number";
      }
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "*Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <section className="sign-up">
      <h2 className="sign-up__title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="sign-up__form">
        <label htmlFor={firstNameId} className="sign-up__label">
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          id={firstNameId}
          className={`sign-up__input ${errors.firstName ? "sign-up__input--error" : ""}`}
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="given-name"
        />
        <label htmlFor={lastNameId} className="sign-up__label">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          id={lastNameId}
          className={`sign-up__input ${errors.lastName ? "sign-up__input--error" : ""}`}
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="family-name"
        />
        <label htmlFor={emailId}className="sign-up__label">
          Email Address:
        </label>
        <input
          type="text"
          name="email"
          id={emailId}
          className={`sign-up__input ${errors.email ? "sign-up__input--error" : ""}`}
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <label htmlFor={passwordId} className="sign-up__label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id={passwordId} 
          className={`sign-up__input ${
            errors.password ? "sign-up__input--error" : ""
          }`}
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <label htmlFor={confirmPasswordId} className="sign-up__label">
          Confirm Password:
        </label>
        <input
          type="password"
          name="confirmPassword"
          id={confirmPasswordId} 
          className={`sign-up__input ${errors.confirmPassword ? "sign-up__input--error" : ""}`}
          value={formData.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
        />
        {errors.firstName && (
          <p className="sign-up__error">{errors.firstName}</p>
        )}
        {errors.lastName && <p className="sign-up__error">{errors.lastName}</p>}
        {errors.email && <p className="sign-up__error">{errors.email}</p>}
        {errors.password && <p className="sign-up__error">{errors.password}</p>}
        {errors.confirmPassword && (
          <p className="sign-up__error">{errors.confirmPassword}</p>
        )}
        <button className="sign-up__submit">Sign Up</button>
        <button className="sign-up__cancel" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </section>
  );
}

export default SignUp;
