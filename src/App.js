import "./App.css";
import Header from "./components/Header";
import RouterMain from "./utils/router";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <div>
      <Header />
      <RouterMain routes={ROUTES} />
    </div>
  );
}

export default App;
