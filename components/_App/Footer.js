import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/" className="navbar-brand">
                    <img className="main-logo" src="/images/logo.png" alt="logo" />
                  </Link>
                </div>
                <p>
                Unlock your business's potential with Byteify Technologies. We offer digital marketing, web development, SEO, content writing, PPC, and more. Elevate your online presence and achieve success
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <Link href="/about-1">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services-1">Services</Link>
                  </li>
                  <li>
                    <Link href="/features">Features</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Our Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog-1">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/term-condition">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    1021, North Market Place, Ste 107-571 <br /> Pueblo, CO 81007 USA
                  </li>
                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="hello@byteifytechnologies.com">hello@byteifytech.com</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:12056070338">+1 (205) 607 0338</a>
                  </li>
                </ul>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright BYTEIFY &copy; {currentYear} StartP. All rights reserved by{" "}
                  <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/map.png" className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src="/images/shape1.png" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
