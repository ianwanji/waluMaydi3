import React from 'react';

const BusinessPage = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="hero" style={{backgroundImage: 'url(hero.jpg)'}}>
        <div className="hero-content">
          <h1>Welcome to Too Good to Go - Business</h1>
          <p>Join us in fighting food waste and saving the planet!</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </section>
      <section id="features">
        <div className="features-content">
          <h2>Features</h2>
          <ul>
            <li>
              <img src="feature1.jpg" alt="Feature 1" />
              <h3>Reduce Food Waste</h3>
              <p>Our platform helps businesses to sell surplus food that would otherwise go to waste.</p>
            </li>
            <li>
              <img src="feature2.jpg" alt="Feature 2" />
              <h3>Save Money</h3>
              <p>Customers get delicious food at discounted prices, while businesses can recoup some of their costs.</p>
            </li>
            <li>
              <img src="feature3.jpg" alt="Feature 3" />
              <h3>Be Sustainable</h3>
              <p>By preventing food waste, your business can contribute to reducing greenhouse gas emissions and combat climate change.</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="pricing">
        <div className="pricing-content">
          <h2>Pricing</h2>
          <p>Contact us to discuss pricing options tailored to your business needs.</p>
          <a href="#contact" className="cta-button">Contact Us</a>
        </div>
      </section>
      <section id="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>Fill out the form below to get in touch with us.</p>
          <form action="/contact" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Too Good to Go. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BusinessPage;