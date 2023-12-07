import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link  from "next/link";
import Head from "next/head";

const WebsiteDevelopment = () => {
  return (
    <>
     <Head>
        <title>Website Development | Byteify Technologies</title>
        <meta
          name="description"
          content="Byteify Technologies can build you a website that is aesthetic, talks your brand to the customer, and is functional as per your needs. Find more!"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Website Development"
        pageDesc={`
        Along with a good design, what you need is a fully functioning website that provides ease for the user and is visually appealing as well as smart in its function. A good website will allow your business to have credibility all over the world and it can help you achieve 10x better sales. We provide expert-level coding and development so that the design as per your choice is brought to life and all the advanced features and functionalities are integrated. 
                `}
      />
      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-development/efficient-coding.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="efficient-coding"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Efficient Coding and Functionality</h3>
                <p>
                Our developers are artists who enable functionality into every pixel. With us, you can expect websites that not only look visibly appealing but also provide a seamless experience, along with an intuitive and efficient browsing experience. 
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Interactive User Experiences</h3>
                <p>
                With our website development services, you can engage visitors with Immersive web interactions. Our customized animations, hovers, and elements put life into the websites and allow the users to have a good experience while going through your website. This is made possible when our <Link className="link" href='/website-design'>web design</Link> and web development teams link up. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-development/interactive-user-experience.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="interactive-user-experience"
              />
            </div>
          </div>
          <div className="separate"></div>

             <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Optimized Performance</h3>
                <p>
                In this digital era when people have low attention spans, speed matters a lot. Make a slow website and you lose your potential customers. Therefore, we develop websites that have faster load times, smooth navigation, enhanced user satisfaction, improved ranking on search engines, and reduced bounce rates.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-development/optimized-perfomance.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="optimized-perfomance"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-development/customized-web-solutions.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="customized-web-solutions"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Customized Web Solutions</h3>
                <p>
                We don't believe in one-size-fits-all. Our developers customize the websites to your unique needs, integrating features that align with your goals, whether it's forms, personalized user experiences, or innovative integrations.
                </p>
              </div>
            </div>
          </div>

          
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Scalability and Future-Proofing</h3>
                <p>
                We build for the future, keeping all the factors in our mind. Our websites are constructed with scalability in mind, allowing for easy expansion as your business grows. Our development ensures your digital presence remains relevant and adaptable over time.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/website-development/scalibility.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="scalibility"
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

export default WebsiteDevelopment;
