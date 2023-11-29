import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import StoreProvider from "./store/contextApi/store.tsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </StrictMode>
);
