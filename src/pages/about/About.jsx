import './About.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga praesentium laboriosam
        officia laudantium mollitia in nulla dolorum, reprehenderit, voluptatum dolores quia harum
        ducimus illo quos, vel voluptatibus quaerat enim aliquam!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              facere quo nostrum, error similique repellendus m dolor sit amet consectetur,
              adipisicing elit. Enim explicabo doloribus facere quo nostrum, error similique
              repellendus sint id aperiam eos quos impedit assumenda. Unde nemo earum quod illo vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              facere quo nostrum, error similique repellendus m dolor sit amet consectetur,
              adipisicing elit. Enim explicabo doloribus facere quo nostrum, error similique
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              facere quo nostrum,
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              adipisicing elit. Enim explicabo doloribus facere quo nostrum, error similique
            </p>
            <p>
              repellendus sint id aperiam eos quos impedit assumenda. Unde nemo earum quod illo vel.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              facere quo nostrum, error similique repellendus m dolor sit amet consectetur,
              adipisicing elit. Enim explicabo doloribus facere quo nostrum, error similique
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              facere quo nostrum, error similique repellendus m dolor sit amet consectetur,
              adipisicing elit. Enim explicabo doloribus facere quo nostrum, error similique
              repellendus sint id aperiam eos quos impedit assumenda. Unde nemo earum quod illo vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              facere quo nostrum, error similique repellendus m dolor sit amet consectetur,
              adipisicing elit. Enim explicabo doloribus facere quo nostrum, error similique
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim explicabo doloribus
              facere quo nostrum,
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
