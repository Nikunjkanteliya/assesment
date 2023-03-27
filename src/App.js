import logo from "./logo.svg";
import "./App.css";
import One from "./component/One";
import { useSelector } from "react-redux";
function App() {
  let abc = useSelector((state) => state.one.tandf);

  return (
    <div className="mainones" style={ abc ? { background: "#999999" } : { background: "#ffffff" }} >
      <One />
    </div>
  );
}

export default App;
