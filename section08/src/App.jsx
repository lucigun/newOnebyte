import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <Editor />
      </section>
      <section>
        <List />
      </section>
    </div>
  );
}

export default App;
