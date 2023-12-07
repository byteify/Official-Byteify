import React from "react";
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";

const About1 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-one.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>About Us</h2>
                  <div className="bar"></div>
                </div>
                <p>
                  At Byteify Technologies, we are a dynamic team of creative
                  minds and technical experts, driven by a passion for
                  delivering exceptional digital marketing and web development
                  solutions. Our commitment to excellence, innovation, and
                  customer satisfaction has earned us a reputation as a leading
                  agency all over the world.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Founded in 2021, Byteify Technologies has come a long way
                    from its humble beginnings. What started as a small team of
                    dedicated individuals with a vision has now evolved into a
                    powerhouse of talent, serving clients from all corners of
                    the globe.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    At Byteify Technologies, our mission is to empower
                    businesses of all sizes to succeed in this digital world. We
                    believe that any business can elevate to new heights of
                    success with the right blend of innovative design, strategic
                    marketing, and cutting-edge technology.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    We are a diverse team of professionals with a common passion
                    for creativity, technology, and client success. Our team
                    comprises seasoned experts in web design, web development,
                    digital marketing, data analytics, and machine learning.
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <FunFactsArea />
      <Footer />
    </>
  );
};

export default About1;
