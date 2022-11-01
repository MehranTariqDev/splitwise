import "./App.css";
import Navbar from "./components/navbar/index";
import Login from "./components/registration/login";
import SignUp from "./components/registration/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<SignUp />}/>
        </Routes>
    </Router>

  );
}

export default App;
