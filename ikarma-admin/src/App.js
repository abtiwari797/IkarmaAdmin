import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NominationDetails from "./Components/NominationDetails";


const App = () => {
  return (
  <>
  {/* <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nominationdetails" element={<NominationDetails />} />
    </Routes>
  </Router> */}
  <Home />
  </>
  );
};

export default App;
