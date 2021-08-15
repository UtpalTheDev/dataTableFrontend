import "./styles.css";
import { Home, Login, Signup } from "./pages";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>Data Search</h1>
      <Routes>
        <PrivateRoute path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
