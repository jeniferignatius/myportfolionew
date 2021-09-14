import React, { useState } from 'react';
import { Projecth } from '../pages/projecthidden';
export const Projects = (props) => {

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
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
                    {isOpen && <Projecth
                      content={<>
                      <b className="bold">Food online ordering system</b><br/><br/>
                      <ul float-left>
                        <li><b>Subject : </b><span>We can order the food from online. As an admin you can able to add the food items to the catagories.</span></li>
                        <li><b>Program : </b><span>Bootstrap, PHP, SQL.</span></li>
                        <li><b>Github code : </b></li>
                      </ul> 
                      <a href = {props.data ? props.data.azure : '/'}><button float-right>VIEW LIVE DEMO</button></a>
                      </>}
                       handleClose={togglePopup}
                      />}
                    <a
                      href='img/project1.png'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Food online ordering system.</h4>
                      </div>
                      <img
                        src='img/project1.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                  <h4>Food online ordering system.</h4>
                  <p>Bootstrap, HTML, CSS, PHP.</p>
                  <span>
                      <button className='more' onClick={togglePopup} >
                      know more
                      </button></span>
                </div>
              </div>
             
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    {isOpen && <Projecth
                      content={<>
                      <b className="bold">Email Template</b><br/><br/>
                      <ul float-left>
                        <li><b>Subject : </b><span>This is a simple email template.</span></li>
                        <li><b>Program : </b><span>HTML, CSS.</span></li>
                        <li><b>Github code : </b></li>
                      </ul> 
                      <a href = "http://jeniferi.azurewebsites.net"><button float-right>VIEW LIVE DEMO</button></a>
                      </>}
                       handleClose={togglePopup}
                      />}
                    <a
                      href='img/project2.png'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Email Template.</h4>
                      </div>
                      <img
                        src='img/project2.png'
                        height = '20px'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                  <h4>Email Template.</h4>
                  <p>HTML, CSS.</p>
                  <span>
                      <button className='more' onClick={togglePopup} >
                      know more
                      </button></span>
                </div>
              </div>

             
             
              
            </div>
          </div>
        </div>
      </div>
    )
  }
