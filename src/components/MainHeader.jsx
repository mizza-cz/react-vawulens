import { Link } from 'react-router-dom';
import Image from '../images/main_header.png';

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci aliquid
            corrupti natus, alias commodi?
          </p>
          <Link className="btn lg" to="./plans">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-img">
            <img src={Image} alt="Main Header Imge" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
