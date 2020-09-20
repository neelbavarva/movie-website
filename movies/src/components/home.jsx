import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import About from "./about";
import Top10 from "./top10";

class Home extends Component {
  render() {
    return (
      <div className="bg-color">
        {/* Header Detail */}
        <section id="main-home">
          <div class="main-home-container">
            <h1>Movie Website</h1>
            <h2>Scroll karva par navbar transparent thai jai aavu karvu che</h2>
            <a href="#mainpage" class="btn-scroll scrollto" title="Scroll Down">
              <img src="/images/arrow.png" />
            </a>
          </div>
        </section>
        {/* Header Detail End */}

        <p id="mainpage">_</p>
        <br />
        <br />
        <br />
        <br />

        {/* Buttons */}
        <div className="row">
          <div className="header-buttons">
            <a href="#allcategories">
              <div class="button button-2">All Categories</div>
            </a>
            <a href="#hollywood">
              <div class="button button-2">Hollywood</div>
            </a>
            <a href="#bollywood">
              <div class="button button-2">Bollywood</div>
            </a>
            <div class="button button-2">Netflix</div>
          </div>
        </div>
        {/* Buttons end */}

        <p id="allcategories">_</p>
        <br />
        <br />

        {/* All Categories Section */}

        <h1 className="allcategories">All categories</h1>
        <br />
        <br />
        <br />
        <br />

        <section id="portfolio" class="portfolio">
          <div class="container">
            <div class="row portfolio-container">
              <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                <a href="/top10">
                  <div class="portfolio-img">
                    <img src="/images/top10.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="portfolio-info">
                    <h4>Top 10 Movies</h4>
                    <p>Click to see the list</p>
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="App 1"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="details-link"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                <div class="portfolio-img">
                  <img src="/images/mustwatch.jpg" class="img-fluid " alt="" />
                </div>
                <div class="portfolio-info">
                  <h4>Must Watch Before you die</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Web 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                <div class="portfolio-img">
                  <img src="/images/amazing.jpg" class="img-fluid" alt="" />
                </div>
                <div class="portfolio-info">
                  <h4>Some Amazing ones</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="App 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-card">
                <div class="portfolio-img">
                  <img src="/images/action.jpg" class="img-fluid" alt="" />
                </div>
                <div class="portfolio-info">
                  <h4>Action</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Card 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* All Categories Section End */}

        {/* Hollywood Section */}

        {/* Fixed Image */}
        <section id="testimonials" class="hollywood-img">
          <div class="container">
            <div class="owl-carousel testimonials-carousel">
              <div class="testimonial-item"></div>
            </div>
          </div>
        </section>
        {/* Fixed Image End */}

        <br />
        <p id="hollywood">_</p>
        <br />
        <br />
        <br />
        <h1 className="hollywood">Hollywood</h1>
        <br />
        <br />
        <br />
        <br />

        <section id="portfolio" class="portfolio">
          <div class="container">
            <div class="row portfolio-container">
              <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                <a href="/top10">
                  <div class="portfolio-img">
                    <img src="/images/top10.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="portfolio-info">
                    <h4>Top 10 Movies</h4>
                    <p>Click to see the list</p>
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="App 1"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="details-link"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                <div class="portfolio-img">
                  <img src="/images/mustwatch.jpg" class="img-fluid " alt="" />
                </div>
                <div class="portfolio-info">
                  <h4>Must Watch Before you die</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Web 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                <div class="portfolio-img">
                  <img src="/images/amazing.jpg" class="img-fluid" alt="" />
                </div>
                <div class="portfolio-info">
                  <h4>Some Amazing ones</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="App 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-card">
                <div class="portfolio-img">
                  <img src="/images/action.jpg" class="img-fluid" alt="" />
                </div>
                <div class="portfolio-info">
                  <h4>Action</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Card 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />

        {/* Hollywood Section End */}

        {/* Bollywood Section */}

        {/* Fixed Image */}
        <section id="testimonials" class="bollywood-img">
          <div class="container">
            <div class="owl-carousel testimonials-carousel">
              <div class="testimonial-item"></div>
            </div>
          </div>
        </section>
        {/* Fixed Image End */}

        <br />
        <p id="bollywood">_</p>
        <br />
        <br />
        <br />
        <h1 className="bollywood">bollywood</h1>
        <br />
        <br />
        <p className="row">
          <a className="doubt">
            Should I remove bollywood part ? -- Sirf Hollywood aur Webseries
            rahega ( Dead Link )
          </a>
        </p>
        <br />
        <br />
        <section id="portfolio" class="portfolio">
          <div class="container">
            <div class="row portfolio-container">
              <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                <a href="/top10">
                  <div class="portfolio-img">
                    <img src="/images/top10.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="portfolio-info">
                    <h4>Top 10 Movies</h4>
                    <p>Click to see the list</p>
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="App 1"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="details-link"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                <div class="portfolio-img">
                  <img
                    src="/images/mustwatch-bollywood.jpg"
                    class="img-fluid "
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Must Watch Before you die</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Web 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                <div class="portfolio-img">
                  <img
                    src="/images/amazing-bollywood.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Some Amazing ones</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="App 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 portfolio-item filter-card">
                <div class="portfolio-img">
                  <img
                    src="/images/bollywood-action.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="portfolio-info">
                  <h4>Action</h4>
                  <p>Click to see the list</p>
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Card 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="details-link"
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bollywood Section End */}

        {/* FOOTER is moved to Footer component kyuki baar baar nai likhna */}
      </div>
    );
  }
}

export default Home;
