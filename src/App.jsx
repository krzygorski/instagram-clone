import "./App.css";
import { Wrapper } from "./components/wrapper/Wrapper";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;
library.add(fas, far);
