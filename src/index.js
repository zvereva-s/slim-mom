import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { LanguageProvider } from "./shared/providers/LanguageProvider";
import { ThemeProvider } from "./shared/providers/ThemeProvider";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./App";

import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LanguageProvider>
          <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </ThemeProvider>
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
