import "./App.css";
import AvailabilityPage from "./components/AvailabilityPage";
import TransactionPage from "./components/TransactionPage";
import Items from "./components/items";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/items" element={<Items />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/availability" element={<AvailabilityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
