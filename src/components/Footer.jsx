import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-m.png";
import navIcon1 from "../assets/icons/nav-icon1.svg";
import navIcon2 from "../assets/icons/nav-icon2.svg";
import navIcon3 from "../assets/icons/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" id="logo-ft" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/" target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://facebook.com/" target='_blank'><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/" target='_blank'><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright &copy; 2023 by Mouha | All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}