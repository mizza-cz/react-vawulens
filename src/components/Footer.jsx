import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, doloribus.
            Voluptates facilis veritatis iusto, officiis esse nam earum libero animi delectus cumque
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com" rel="noreferrer noopenner" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" rel="noreferrer noopenner" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" rel="noreferrer noopenner" target="_blank">
              <AiOutlineTwitter />
            </a>
            <a href="https://instagram.com" rel="noreferrer noopenner" target="_blank">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Pemalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>Learn Tutorial. Mizza &copy; All Right Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
