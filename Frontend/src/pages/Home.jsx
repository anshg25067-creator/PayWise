import "../styles/home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1 className="main">Manage your Expenses Smarter</h1>
      <p className="para">
        Track expenses, cash flow and data-driven financial decisions <br />
        with a platform design for modern era
      </p>

      <Link to="/dashboard">
        <button className="btnget">Get Started → </button>
      </Link>

      <section id="about" className="about"> {/* Fixed: changed class to className */}
        <div className="about-container"> {/* Fixed: changed class to className */}
          <h1>About Us</h1> {/* Fixed: removed 'cl' attribute fragment */}
          <p>
            PayWise is a smart debt tracker designed to simplify everyday money interactions...<br />
            Unlike traditional expense apps that require multiple inputs, PayWise allows you <br />
            to simply type naturally, like “gave Rahul 500 for dinner,” and the system 
            understands and records it for you.
          </p>

          <p>
            Our goal is to remove awkwardness and make financial tracking effortless. With 
            clear insights, reminders, and an easy-to-use interface, PayWise ensures you 
            always know who owes whom and how much.
          </p>

          <div className="features-grid"> {/* Fixed: changed class to className */}
            <div className="feature-card">
              <div className="icon">
                💁🏻‍♂️
              </div>
              <h3>Aditya Sahu</h3>
              <p>
                Built the Home & Login interface with a smooth and modern user experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">
                👱🏼‍♂️
              </div>
              <h3>Rohit Raj</h3>
              <p>Designed the Dashboard and Create Account pages for seamless expense management.</p>
            </div>

            <div className="feature-card">
              <div className="icon">
                🧔🏻
              </div>
              <h3>Ansh Gupta</h3>
              <p>Handled backend development and database integration for secure functionality.</p>
            </div>
          </div>
          
          <h3 className="message">Split the bill, keep the friendship.</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;