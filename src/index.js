import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

function renderApp() {
  render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById("app")
  );
}
renderApp();
if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
