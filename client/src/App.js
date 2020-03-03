import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import RegisterPage from "./Components/Pages/RegisterPage/RegisterPage.jsx";
import "./App.css";

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <RegisterPage />
      </div>
    </Provider>
  );
}

export default App;
