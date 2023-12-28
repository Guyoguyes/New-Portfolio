import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import bc from "../../Assets/Projects/bc.png";
import safetymtaani from "../../Assets/Projects/safetymtaani.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import mara from "../../Assets/Projects/mara.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safetymtaani}
              isBlog={false}
              title="SafetyMtaani"
              description="Developed SafetyMtaani, a web application facilitating crime reporting, search, and analysis for community awareness. Key contributions include implementing intuitive crime search and reporting features, leading UI/UX design for enhanced user experience, and establishing a robust database service for efficient data management. "
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://guyoguyes.github.io/delani-studio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mara}
              isBlog={false}
              title="Mara"
              description="Mara is a visionary application revolutionizing wildlife data recording through automated processes, catering to the needs of dedicated rangers. This project showcases my proficiency in backend development and database management.."
              ghLink="https://github.com/Guyoguyes/Mara.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bc}
              isBlog={false}
              title="Blue Collar Connect"
              description="Blue Collar Connect is an innovative startup dedicated to transforming the connection between blue-collar service providers and clients. Designed for efficiency and real-time communication, this platform serves as a dynamic bridge, connecting users seamlessly."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
