import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NominationDetails from "./Components/NominationDetails";
import MainLayout from "./Components/MainLayout"; // Import the MainLayout
import CompnayForm from "./Components/CompanyForm";
import Login from "./Components/Login";
import AddHrToCompany from "./Components/AddHrToCompany";
import EditCompany from "./Components/EditCompany";
import CompnayList from "./Components/CompanyLists";
import Protected from "./routes/Protected";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <MainLayout>
                <Home />
              </MainLayout>
            </Protected>
          }
        />
        <Route
          path="/nominationdetails/:id"
          element={
            <Protected>
              <MainLayout>
                <NominationDetails />
              </MainLayout>
            </Protected>
          }
        />
        <Route
          path="/companylist"
          element={
            <Protected>
              <MainLayout>
                <CompnayList />
              </MainLayout>
            </Protected>
          }
        />
        <Route
          path="/editcompany"
          element={
            <Protected>
              <MainLayout>
                <EditCompany />
              </MainLayout>
            </Protected>
          }
        />
        <Route
          path="/addcompany"
          element={
            <Protected>
              <MainLayout>
                <CompnayForm />
              </MainLayout>
            </Protected>
          }
        />
        <Route
          path="/addhr"
          element={
            <Protected>
              <MainLayout>
                <AddHrToCompany />
              </MainLayout>
            </Protected>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
