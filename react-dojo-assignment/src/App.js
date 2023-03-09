import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routing from "./react-routing/Routing";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
    // <BrowserRouter>
    //   <Routing />
    // </BrowserRouter>
  );
}

export default App;
