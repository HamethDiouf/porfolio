import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardTwo } from "./ProjectCardTwo";
import { ProjectCardThree } from "./ProjectCardThree";
import projImg1 from "../assets/img/wt.png";
import projImg2 from "../assets/img/todo.png";
import projImg3 from "../assets/img/quiz.png";
import projImg4 from "../assets/img/calculator.png";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';




export const Projects = () => {

  // Tab One Projects ******* 
  const projects = [
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg1,
      viewProj:'https://meteo-mhd.vercel.app/',
      sourceProj:'https://github.com/HamethDiouf/Wheather_project'
    },
    {
      title: "Todo-List App",
      description: "Design & Development",
      imgUrl: projImg2,
      viewProj:'https://todo-list-mhd.vercel.app/',
      sourceProj:'https://github.com/HamethDiouf/final-project_Todo-List'
    },
    {
      title: "Quizz App",
      description: "Design & Development",
      imgUrl: projImg3,
      viewProj:'https://quizz-mhd.vercel.app/',
      sourceProj:'https://github.com/HamethDiouf/Quizz_Js'
    },
    {
      title: "Calculator App",
      description: "Design & Development",
      imgUrl: projImg4,
      viewProj:'https://calculator-mhd.vercel.app/',
      sourceProj:'https://github.com/HamethDiouf/calculator_app'
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      viewProj:'',
      sourceProj:''
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
      viewProj:'',
      sourceProj:''
    },
  ];

 // Tab Two Projects ******
 const projects2 = [
  {
    title2: "Weather App",
    description2: "Design & Development",
    imgUrl2: projImg1,
    viewProj2:'',
    sourceProj2:''
  },
  {
    title2: "Weather App",
    description2: "Design & Development",
    imgUrl2: projImg1,
    viewProj2:'',
    sourceProj2:''
  },
  {
    title2: "Weather App",
    description2: "Design & Development",
    imgUrl2: projImg1,
    viewProj2:'',
    sourceProj2:''
  },
  {
    title2: "Weather App",
    description2: "Design & Development",
    imgUrl2: projImg1,
    viewProj2:'',
    sourceProj2:''
  },
  {
    title2: "Weather App",
    description2: "Design & Development",
    imgUrl2: projImg1,
    viewProj2:'',
    sourceProj2:''
  },
  {
    title2: "Weather App",
    description2: "Design & Development",
    imgUrl2: projImg1,
    viewProj2:'',
    sourceProj2:''
  }
];

 // Tab Three Projects ******
 const projects3 = [
  {
    title3: "Weather App",
    description3: "Design & Development",
    imgUrl3: projImg2,
    viewProj3:'',
    sourceProj3:''
  },
  {
    title3: "Weather App",
    description3: "Design & Development",
    imgUrl3: projImg2,
    viewProj3:'',
    sourceProj3:''
  },
  {
    title3: "Weather App",
    description3: "Design & Development",
    imgUrl3: projImg2,
    viewProj3:'',
    sourceProj3:''
  },
  {
    title3: "Quizz App",
    description3: "Design & Development",
    imgUrl3: projImg3,
    viewProj3:'',
    sourceProj3:''
  },
  {
    title3: "Quizz App",
    description3: "Design & Development",
    imgUrl3: projImg3,
    viewProj3:'',
    sourceProj3:''
  },
  {
    title3: "Quizz App",
    description3: "Design & Development",
    imgUrl3: projImg3,
    viewProj3:'',
    sourceProj3:''
  }
];
    



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This section highlights several significant projects that I have developed, illustrating my technical expertise, my ability to solve complex problems and my commitment to creating innovative solutions. These projects reflect the application of modern technologies and an approach focused on user needs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCardTwo
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCardThree
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}