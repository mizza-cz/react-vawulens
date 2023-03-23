import './Plans.css';

import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import { plans } from '../../data';
import Card from '../../UI/Card';

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab molestiae impedit voluptatibus
        aliquam optio velit suscipit quaerat voluptate maxime obcaecati.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card className="plan" key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available, index }) => {
                  return (
                    <p key={index} className={!available ? 'disabled' : ''}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg ">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
