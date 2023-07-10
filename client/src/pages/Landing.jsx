import { Logo } from "../components";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info ">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
            I'm baby brunch kinfolk pok pok ugh deep v. Pour-over intelligentsia
            hammock kogi street art. Chicharrones tumeric fashion axe everyday
            carry, messenger bag fanny pack kickstarter gluten-free pop-up
            subway tile stumptown. Tacos salvia schlitz, ascot la croix
            taxidermy tattooed semiotics bespoke direct trade. Fit knausgaard
            readymade, shoreditch quinoa hammock distillery big mood drinking
            vinegar bitters dreamcatcher kickstarter cardigan roof party.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
