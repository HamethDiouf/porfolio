import React from 'react';
import { Col } from "react-bootstrap";
import GithubIcon from '../assets/icons/github.svg';
import EyeIcon from '../assets/icons/eye.svg'

export const ProjectCardThree = ({title3, description3, imgUrl3, viewProj3, sourceProj3}) => {

  return (
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl3} />
            <div className="proj-txtx" style={{marginTop:'5rem'}}>
                <h4>{title3}</h4>
                <span>{description3}</span>
                <br />
                <a href={sourceProj3} className='proj-icon' id='github'><img src={GithubIcon} alt="Github icon" /></a>
                <a href={viewProj3} className='proj-icon'><img src={EyeIcon} alt="Eye icon" /></a>
            </div>
        </div>
      </Col>
  )
}


