import { useLogin } from "../context/LoginContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProvider } from "../context/Context";

export function Login() {
  let { isUserLogIn, LoginWithCredentials } = useLogin();
  const { dispatch } = useProvider();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");
  let navigate = useNavigate();
  let { state } = useLocation();
  let [error, setError] = useState("");
  useEffect(() => {
    if (isUserLogIn) {
      navigate(state?.from ? state.from : "/", { replace: true });
    }
  }, [isUserLogIn]);

  async function LoginHandler() {
    let errorpassed = await LoginWithCredentials(email, password);
    setError(errorpassed);
  }
  return (
    <div>
      <div>
        <h3>Login</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            LoginHandler();
          }}
        >
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="input-text"
            required
          />

          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="input-text"
            required
          />
          <div>Password should contain atleast 6 characters</div>
          <div>
            <button type="submit">Login</button>
          </div>
          <hr />
          <div>
            Don't have an account?
            <Link to="/signup" style={{ color: "blue" }}>
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
        <div style={{ color: "red", paddingBottom: "2rem" }}>{error}</div>
      </div>
    </div>
  );
}
