import React from "react";
import { Button, Dropdown, Container } from "react-bootstrap"; // Import Container from react-bootstrap
import { FiMenu } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="dropdown-container">
        <div className="dropdown-menu-container">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ color: "black", backgroundColor: "#fff", borderColor: "#fff" }}>
              <FiMenu size={24} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/edit-profile">
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Container style={{
        display: "absolute",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
        <div style={{ width: "60%", height: "50%" }} className="text-center">
          <h1 style={{ padding:  "20px" }}>Welcome to rag-chatapp</h1>
          <p style={{ fontSize: "1.5em", marginTop: "10px" }}>
            RAG chatapp is a financial assistant chatbot powered by Retrieval Augmented Generation (RAG) 
            with Streamlit and ChatGPT, Selenium to answer queries regarding finance by scraping through the latest financial news articles.
            <br></br><br></br><br></br>
            Check out more details on the github repo 
            <a href="https://github.com/azizHakim/rag-chatapp" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a> <br></br>
            Connect with me on LinkedIn
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          .
          </p>
          {user && <p>{user.name}</p>}
          </div>
          <div style={{ width: "50%", height: "50%" }} className="text-center mt-3">
            <Link to="https://rag-chatapp-sbeilyjgrq-uc.a.run.app">
              <Button variant="info" style={{ backgroundColor: "#E1C16E", borderColor: "#E1C16E" }}>Chat with Financial Assistant</Button>
            </Link>
          </div>
        
      </Container>
    </>
  );
};

export default Home;
