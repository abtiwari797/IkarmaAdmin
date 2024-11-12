import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NominationDetails from "./Components/NominationDetails";
import MainLayout from "./Components/MainLayout";  // Import the MainLayout
import CompnayForm from "./Components/CompanyForm";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/nominationdetails" element={<MainLayout><NominationDetails /></MainLayout>} />
        <Route path="/addcompany" element={<MainLayout><CompnayForm/></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
