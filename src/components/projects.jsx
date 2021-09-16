import React from 'react';
//import { Projecth } from '../pages/projecthidden';
export const Projects = (props) => {


    return (
      <div id='projects' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Projects</h2>
            <p>
              This is my projects.
            </p>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/project1.png'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Food online ordering system.</h4>
                        <h5>Bootstrap, PHP, SQL.</h5>
                      </div>
                      <img
                        src='img/project1.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
              
                  <span>
                      <a href = {props.data ? props.data.azure : '/'}>
                      <button className='more' >
                        Demo
                      </button>
                      </a>
                      </span>
                </div>
              </div>
             
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   
                    <a
                      href='img/project2.png'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Email Template.</h4>
                        <h5>HTML, CSS.</h5>
                      </div>
                      <img
                        src='img/project2.png'
                        height = '20px'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                  <span>
                  <a href = {props.data ? props.data.etemplate : '/'}>
                      <button className='more' >
                        Demo
                      </button>
                  </a>
                  </span>
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   
                    <a
                      href='img/project3.png'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Todo App.</h4>
                        <h5>ReactJs.</h5>
                      </div>
                      <img
                        src='img/project3.png'
                        height = '20px'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                  <span>
                  <a href = {props.data ? props.data.todoapp : '/'}>
                      <button className='more' >
                        Demo
                      </button>
                  </a>
                  </span>
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    )
  }
