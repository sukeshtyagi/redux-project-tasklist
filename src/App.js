import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/add" element={<Header />} />
        <Route path="/active" element={<Header />} />
        <Route path="/completed" element={<Header />} />
        <Route path="/notes" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
