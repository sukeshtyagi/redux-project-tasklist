import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ components/Header";
import AllTasksContainer from "./containers/AllTasksContainer";
import AddTaskContainer from "./containers/AddTaskContainer";
import UpdateTask from "./ components/UpdateTask";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllTasksContainer />} />
        <Route path="/add" element={<AddTaskContainer />} />
        <Route path="/active" element={<Header />} />
        <Route path="/completed" element={<Header />} />
        <Route path="/task/:id" element={<UpdateTask />} />
        <Route path="/notes" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
