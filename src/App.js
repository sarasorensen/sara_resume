import ReactDOM from "react-dom/client";
import Layout from "./View/Layout";

export default function App() {
  return (
    <div id="App">
      <Layout pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <a href="/" className="logo">
        Sara Sørensen
      </a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
