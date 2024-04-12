import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ components/Header";
import AllTasks from "./ components/AllTasks";
import AddTaskContainer from "./containers/AddTaskContainer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/add" element={<AddTaskContainer />} />
        <Route path="/active" element={<Header />} />
        <Route path="/completed" element={<Header />} />
        <Route path="/notes" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
