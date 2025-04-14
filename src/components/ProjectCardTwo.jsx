import React from 'react';
import { Col } from "react-bootstrap";
import GithubIcon from '../assets/icons/github.svg';
import EyeIcon from '../assets/icons/eye.svg'

export const ProjectCardTwo = ({title2, description2, imgUrl2, viewProj2, sourceProj2}) => {

  return (
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl2} />
            <div className="proj-txtx" style={{marginTop:'5rem'}}>
                <h4>{title2}</h4>
                <span>{description2}</span>
                <br />
                <a href={sourceProj2} className='proj-icon' id='github' target='_blank'><img src={GithubIcon} alt="Github icon" /></a>
                <a href={viewProj2} className='proj-icon' target='_blank'><img src={EyeIcon} alt="Eye icon" /></a>
            </div>
        </div>
      </Col>
  )
}


