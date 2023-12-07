import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import Head from "next/head";

const WebsiteDesign = () => {
  return (
    <>
      <Head>
        <title>Website Design | Byteify Technologies</title>
        <meta
          name="description"
          content="Byteify Technologies possesses top-notch web design expertise which can enhance the user UI/UX experience for your website. Find more!"
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Website design"
        pageDesc={`
        Attract your potential customers with a creative and eye-catching web design. Allow us to understand your business needs and we will design you a website that matches the vibe and sets your tone in the market right, The right design will be compatible and attractive on all devices, allowing seamless browsing. Our services include: 
                `}
      />

      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-design/user-experience.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="user-experience"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>User Experience (UX) Optimization</h3>
                <p>
                  Businesses that give priority to UX optimization are more
                  likely to flourish, as per statistics. With top-notch UX
                  optimization, you can gain a competitive advantage over your
                  rivals, get a better retention rate, and improve engagement
                  and conversion. Byteify Technologies will perform an in-depth
                  analysis for the enhancement of the user journey and allow
                  intuitive navigation to increase user satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Responsive Design and User Experience</h3>
                <p>
                  We design websites that adapt seamlessly to all devices,
                  enhancing user experience across smartphones, tablets, and
                  desktops. Our designs prioritize seamless navigation and
                  optimized layouts, ensuring visitors engage effortlessly with
                  your content regardless of the device they use. Our design
                  experts then convey the idea to our{" "}
                  <Link className="link" href="/website-development">
                    development team
                  </Link>{" "}
                  who make the idea functional.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-design/responsive-design.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="responsive-design"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-design/visual-branding.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Visual Branding and Aesthetics</h3>
                <p>
                  We involve your brand identity in every pixel, ensuring your
                  website visually communicates your values. Our designs
                  leverage color psychology, typography, and imagery to create a
                  persuasive and compelling online presence of your brand.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Conversion-Centric Layouts</h3>
                <p>
                  We strategically position calls-to-action (CTAs) to guide
                  visitors toward desired results. Our designs emphasize user
                  flow, keeping potential customers engaged and driving higher
                  conversion rates on your landing pages.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-design/conversion-centric-layouts.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="conversion-centric-layouts"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-design/ecommerce-store.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="e-commerce-store"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>E-commerce and Online Store Design</h3>
                <p>
                  Elevate your online store with user-friendly interfaces that
                  enhance the shopping journey. We optimize product pages for
                  impact, focusing on clear visuals, product details, and easy
                  checkout processes to maximize conversions.
                </p>
              </div>
            </div>
          </div>
          <div className="separate"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Optimization and Performance</h3>
                <p>
                  Speed is crucial in the digital age. Our designs prioritize
                  fast loading times and cross-browser compatibility. We ensure
                  your website's performance meets user expectations, reducing
                  bounce rates and improving search engine visibility.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-design/optimization.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WebsiteDesign;
