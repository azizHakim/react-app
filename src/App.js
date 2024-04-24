import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
          
        </Col>
      </Row>
    </Container>
    <Container style={{
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 1000,
    width: "100%",
    padding: "15px", // Adjust padding as needed
  }}>
    <Routes>
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    
    </Routes>
    </Container>
    </Router>
    </UserAuthContextProvider>
    
  );
}

export default App;
