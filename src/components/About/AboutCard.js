import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Guyo Abdub </span>
            hailing from the vibrant city <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently employed as a software developer at mHealth Kenya.
            <br />
            <br />
            Join me on this journey where technology meets creativity, and every adventure is an opportunity for growth and discovery!
            <br />
            <br />

            <Button
                href="https://github.com/Guyoguyes/New-Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <a class="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=guyo-abdub" target="_blank" style={{textDecoration: 'none', color: '#fff'}}>Connect on LinkedIn</a>

            </Button>
            <br />
            <br />
              Apart from coding, some other activities that I love to do!
              </p>
            
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Bikes
            </li>
          </ul>

          <p style={{ color: "rgba(72, 144, 97, 0.561)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Guyo Abdub</footer>
        </blockquote>
        
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
