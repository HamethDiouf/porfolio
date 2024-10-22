import React from 'react';
import { Col } from "react-bootstrap";
import GithubIcon from '../assets/icons/github.svg';
import EyeIcon from '../assets/icons/eye.svg'

export const ProjectCard = ({title, description, imgUrl, viewProj, sourceProj}) => {

  return (
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx" style={{marginTop:'5rem'}}>
                <h4>{title}</h4>
                <span>{description}</span>
                <br />
                <a href={sourceProj} className='proj-icon' id='github'><img src={GithubIcon}alt="Github icon" /></a>
                <a href={viewProj} className='proj-icon'><img src={EyeIcon} alt="Eye icon" /></a>
            </div>
        </div>
      </Col>
  )
}


