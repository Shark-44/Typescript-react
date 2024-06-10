import "./Home.scss"
import LogoA2 from "../assets/images/LogoA2.png"

const Home: React.FC = () => {
    return (
        <div className="contenaireHome">
            <h1>Les génériques de récré</h1>
            <img src={LogoA2} alt="logo" />
        </div>
    );
  };
  
  export default Home;