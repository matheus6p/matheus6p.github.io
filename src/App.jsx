import "./styles/globals.css";
import CustomNavbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CustomNavbar />
      <Profile />
      <Projects />
      <Sobre />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
