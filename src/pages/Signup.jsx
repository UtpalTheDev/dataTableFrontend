import { useLogin } from "../context/LoginContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProvider } from "../context/Context";

export function Signup() {
  let { isUserLogIn } = useLogin();
  let { dispatch } = useProvider();
  let [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let { state } = useLocation();

  useEffect(() => {
    if (isUserLogIn) {
      navigate(state?.from ? state.from : "/", { replace: true });
    }
  }, [isUserLogIn]);

  async function signupHandler() {
    try {
      let response = await axios.post("https://demo.utpalpati.repl.co/signup", {
        user: { userName, email, password }
      });
      if (response.status === 200) {
        setError("");
        navigate("/login");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  return (
    <div className="signup">
      <div>
        <h3>Signup</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler();
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="input-text"
            placeholder="username"
            required
          />

          <div>User Name should contain atleast 6 characters</div>

          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input-text"
            placeholder="email"
            required
          />

          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input-text"
            placeholder="password"
            required
          />

          <div>Password should contain atleast 6 characters</div>
          <div>
            <button type="submit" className="secondary-button md">
              Signup
            </button>
          </div>
          <hr />
          <div>
            Have an account?
            <Link to="/login" style={{ color: "blue" }}>
              {" "}
              Log in now
            </Link>
          </div>
        </form>
        <div style={{ color: "red", padding: "0.5rem 0" }}>{error}</div>
      </div>
    </div>
  );
}
