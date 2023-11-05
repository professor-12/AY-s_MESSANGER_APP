import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StoreProvider from "./store/contextApi/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StoreProvider>
        <App></App>
    </StoreProvider>
);
