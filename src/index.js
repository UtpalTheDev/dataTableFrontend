import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./context/Context";
import { LoginProvider } from "./context/LoginContext";
import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Router>
      <LoginProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </LoginProvider>
    </Router>
  </StrictMode>,
  rootElement
);
