import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NominationDetails from "./Components/NominationDetails";
import MainLayout from "./Components/MainLayout";  // Import the MainLayout
import CompnayForm from "./Components/CompanyForm";
import Login from "./Components/Login";
import AddHrToCompany from "./Components/AddHrToCompany";
import EditCompany from "./Components/EditCompany";
import CompnayList from "./Components/CompanyLists";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<MainLayout><Home /></MainLayout>}/>
        <Route path="/nominationdetails/:id" element={<MainLayout><NominationDetails /></MainLayout>} />
        <Route path="/companylist" element={<MainLayout><CompnayList/></MainLayout>} />
        <Route path="/editcompany" element={<MainLayout><EditCompany/></MainLayout>} />
        <Route path="/addcompany" element={<MainLayout><CompnayForm/></MainLayout>} />
        <Route path="/addhr" element={<MainLayout><AddHrToCompany/></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
