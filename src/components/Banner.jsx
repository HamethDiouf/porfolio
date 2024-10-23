import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle} from 'react-bootstrap-icons';
import HeaderImg from '../assets/img/header-img.svg';
import TrackVisibility from 'react-on-screen';
import Cv from '../assets/cv/cv-hameth.pdf';
import 'animate.css';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1
      ) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if(isDeleting) {
        setDelta(prevDelta => prevDelta /2)
      } 

      if(!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period); 
      } else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1); 
        setDelta(500);
      }
    }
       
  return (
      <section className="banner" id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className='tagline'>Welcome to my porfolio</span>
                    <h1 className='heading'>{`Hi! I'm Mouha`} <br /> <span className='wrap'>{text}</span></h1>
                    <p className='description'>I'm a software developer  with experience building websites and apps. I am motivated and passionate about programming and am constantly learning new technologies to improve my skills. My goal is to work on innovative projects and contribute significantly to the evolution of the web development industry.</p>
                    <button onClick={() => console.log('download')}><a href={Cv} id='down'>Dowload Cv<ArrowRightCircle size= {25} /></a>
                    </button>
                  </div>}
                </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                   <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={HeaderImg} alt={"Header Img"} />
                    </div>}
                  </TrackVisibility>
                </Col>
            </Row>
        </Container>
      </section>
  )
}


