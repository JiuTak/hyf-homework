import "./App.css";
import MainPage from "./components/MainPage";
import { Provider } from "./components/ContextUser";

function App() {
  return (
    <div className="App">
      <Provider>
        <MainPage />
      </Provider>
    </div>
  );
}
export default App;
