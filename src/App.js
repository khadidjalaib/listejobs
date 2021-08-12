import "./App.css";
import data from "../data.json";
import Header from "../src/components/Header/Header";
import jobslist from "./components/jobslist/jobslist";
function App() {
  return (
    <div className="App">
      <Header />
      <jobslist data={data} />
      <h1>hello everyone </h1>
    </div>
  );
}

export default App;
