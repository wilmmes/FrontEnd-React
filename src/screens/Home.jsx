//import Logo from "../components/Home/Logo.jsx";
//import Github from "../components/Home/Github.jsx";
import Body from "../components/Home/Body.jsx";
import Footer from "../components/Home/Footer.jsx";
import Openlink from "../components/Cors/openlink.jsx";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import gitLogo from "../assets/GitHub_Logo.png";
import { useSelector } from "react-redux";

const Home = () => {
    const count = useSelector((state) => state.counter.value);
  return (
    <div>
        <span className="counter-value">Value: {count}</span>
      <div>
        <Openlink redirectUrl="https://vite.dev" logoImage={viteLogo} />
        <Openlink redirectUrl="https://react.dev" logoImage={reactLogo} />
        <Openlink
          redirectUrl="https://github.com/wilmmes/FrontEnd-React/tree/master"
          logoImage={gitLogo}
        />
      </div>
      <Body />
      <Footer />
    </div>
  );
};
export default Home;
