import "./App.scss";
import "./styles/global.scss";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projetos/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Menu />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
