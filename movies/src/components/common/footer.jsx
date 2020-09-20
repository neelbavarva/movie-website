import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="bg-color">
        <div class="footer-section">
          <div class="container">
            <div class="row">
              <div class="col-3">
                <div class="footer-widget">
                  <div class="about-widget">
                    <br />
                    <h4 className="footer-h1">Website Name</h4>
                    <br />
                    <br />
                    <p className="footer-info">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices gravida. Risus commodo. Morbi id
                      dictum quam, ut commodo.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                {/* col-lg-2 col-sm-6 */}
                <div class="footer-widget">
                  <h2 class="fw-title offset-2">Usfull Links</h2>
                  <ul>
                    <li>
                      <a href="https://reactjs.org/" target="_blank">
                        React
                      </a>
                    </li>
                    <li>
                      <a href="https://redux.js.org/" target="_blank">
                        redux
                      </a>
                    </li>
                    <li>
                      <a href="https://getbootstrap.com/" target="_blank">
                        Bootstrap
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mongodb.com/" target="_blank">
                        MongoDB
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-3">
                <div class="footer-widget">
                  <h2 class="fw-title offset-2">Services</h2>
                  <ul>
                    <li>
                      <a href="">About us</a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="">Become a writer</a>
                    </li>
                    <li>
                      <a href="">Jobs</a>
                    </li>
                    <li>
                      <a href="">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-3">
                <div class="footer-widget">
                  <h2 class="fw-title offset-2">Careeres</h2>
                  <ul>
                    <li>
                      <a href="">Donate</a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                    <li>
                      <a href="">Subscriptions</a>
                    </li>
                    <li>
                      <a href="">Careers</a>
                    </li>
                    <li>
                      <a href="">Our team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="social-links-warp">
            <div class="container">
              <div class="social-links">
                <a href="#">
                  <img className="instalogo" src="/images/instagram.png" />
                  <span>Instagram</span>
                </a>
                <a href="#">
                  <img className="quoralogo" src="/images/quora.png" />
                  <span className="m-2">Quora</span>
                </a>
                <a href="#">
                  <img className="facebooklogo" src="/images/facebook.png" />
                  <span className="m-2">Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/neel-bavarva-61662a1a3/"
                  target="_blank"
                >
                  <img className="linkedinlogo" src="/images/linkedin.png" />
                  <span className="m-2">LinkedIn</span>
                </a>
                <a href="#">
                  <img className="twitterlogo" src="/images/twitter.png" />
                  <span className="m-2">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
