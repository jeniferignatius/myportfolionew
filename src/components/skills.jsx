export const Skills = (props) => {
    return (
      <div id='skills'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='about-text'>
                <h2>My Skills</h2>
                <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                <div className='list-style'>
                  <div className='col-lg-6 col-sm-6'>
                    <h3>IT Skills</h3>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        style={{ width: 80 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        HTML5
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 80 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        CSS
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 80 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        Bootstrap
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 70 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        ReactJS
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 70 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        PHP
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 60 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        Flask
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 70 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        Python
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 50 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        NodeJS
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 80 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        Wordpress
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 80 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        PHPmyAdmin
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 70 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        Robotframework
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                        role="progressbar"
                        style={{ width: 60 + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        AdobeXD
                      </div>
                    </div>
  
  
                  </div>
  
                  <div className='col-lg-6 col-sm-6'>
                    <h3>Language Skills</h3>
                    <ul>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                          role="progressbar"
                          style={{ width: 100 + "%" }}
                          aria-valuemin="0"
                          aria-valuemax="100">
                          Tamil
                        </div>
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                          role="progressbar"
                          style={{ width: 80 + "%" }}
                          aria-valuemin="0"
                          aria-valuemax="100">
                          English
                        </div>
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped fill-80-bar"
                          role="progressbar"
                          style={{ width: 75 + "%" }}
                          aria-valuemin="0"
                          aria-valuemax="100">
                          Finnish(YKI Todistus)
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }