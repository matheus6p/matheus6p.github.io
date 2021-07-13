import "./App.scss";
import "./styles/global.scss";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projetos/Projects";

function App() {
  return (
    <>
      <Menu />
      <Profile />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
