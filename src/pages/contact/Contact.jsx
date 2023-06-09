import './Contact.css';

import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis laudantium officia
        tempore porro, totam libero at illo natus fugiat?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="#" target="_blank " rel="noreferrer noopenner">
              <MdEmail />
            </a>
            <a href="#" target="_blank " rel="noreferrer noopenner">
              <BsMessenger />
            </a>
            <a href="#" target="_blank " rel="noreferrer noopenner">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
