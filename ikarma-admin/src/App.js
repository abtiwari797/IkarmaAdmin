import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NominationDetails from "./Components/NominationDetails";
import MainLayout from "./Components/MainLayout";  // Import the MainLayout
import CompnayForm from "./Components/CompanyForm";
import Login from "./Components/Login";
import Protected from "./routes/Protected";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<MainLayout><Home /></MainLayout>}/>
        <Route path="/nominationdetails/:id" element={<MainLayout><NominationDetails /></MainLayout>} />
        <Route path="/addcompany" element={<MainLayout><CompnayForm/></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
