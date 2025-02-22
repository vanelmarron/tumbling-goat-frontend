import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState, useId } from "react";

function Login({ onSignUpClick, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailId = useId();
  const passwordId = useId();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      setError("* Please enter a valid email address.");
      return;
    }

    const isAuthenticated = true;

    if (isAuthenticated) {
      closeModal();
      navigate("/account");
    }
  };

  return (
    <section className="login">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleLogin} className="login__form">
        <label htmlFor={emailId} className="login__label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id={emailId}
          value={email}
          className={`login__input ${error.email ? "login__input--error" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
        />
        <label htmlFor={passwordId} className="login__label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id={passwordId}
          value={password}
          className={`login__input ${error.password ? "login__input--error" : ""}`}
          onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" 
        />
        {error && <p className="login__error">{error}</p>}
        <button className="login__submit">Login</button>
        <button className="login__cancel" onClick={closeModal}>
          Cancel
        </button>
      </form>
      <div className="login__sign-up">
        <p className="login__text">Don't have an account yet?</p>
        <p className="login__account" onClick={onSignUpClick}>
          {" "}
          Sign up.
        </p>
      </div>
    </section>
  );
}

export default Login;
