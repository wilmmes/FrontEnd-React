//import Logo from "../components/Home/Logo.jsx";
//import Github from "../components/Home/Github.jsx";
import Body from "../components/Home/Body.jsx";
import Footer from "../components/Home/Footer.jsx";
import Openlink from "../components/Cors/openlink.jsx"
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import gitLogo from "../assets/GitHub_Logo.png";

const Home = () => {
  return (
    <div>
      <Openlink
       redirectUrl="https://vite.dev"
       logoImage={viteLogo} />      
      <Openlink redirectUrl="https://react.dev" logoImage={reactLogo} />      
      <Openlink redirectUrl="https://github.com/wilmmes/FrontEnd-React/tree/master" logoImage={gitLogo} />      
      <Body />
      <Footer />
    </div>
  );
};
export default Home;