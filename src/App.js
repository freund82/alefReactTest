import Header from "./components/Header/Header";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
