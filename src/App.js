import Header from "./components/header/header.component";
import LineChart from "./components/line-chart/line-chart.component";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <LineChart />
        <aside>
          <h2> In development</h2>
        </aside>
      </main>
    </div>
  );
}

export default App;
