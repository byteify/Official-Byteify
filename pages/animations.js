import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import Head from "next/head";

const Animations = () => {
  return (
    <>
      <Head>
        <title>2D and 3D Animations | Byteify Technologies</title>
        <meta
          name="description"
          content="Get immersive 2D and 3D animation services with Byitefy Tecnologies. From explainer videos to characters animations, we build everything."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="2D and 3D Animation"
        pageDesc={`
        With our expert 2D and 3D animation services, you can get your hands at the power of storytelling effectively. You can bring your complex ideas to life with explainer videos to add personality through character animations. We can transform your concept into captivating visuals. It’s time that your marketing is elevated with motion graphics, and you can showcase your products from every angle. We combine creativity with technology to engage and inform. 

                `}
      />

      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/2d-and-3d-animations/explainer-videos.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Explainer Videos</h3>
                <p>
                  You can simplify complex concepts for your audience through
                  our easy explainer videos. Our animation team will bring your
                  idea to life through 2d and 3d animations. We will create
                  visually appealing narratives so that you can engage with your
                  audience with ease and effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Product Animations</h3>
                <p>
                  You can showcase your products like never before with our
                  dynamic product animations. We transform static visuals into
                  interactive experiences, which allows customers to explore
                  your offerings from each angle possible so that they can
                  understand the features and benefits deeply.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/2d-and-3d-animations/product-animations.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/2d-and-3d-animations/character-animation.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Character Animation</h3>
                <p>
                  You can add personality to your brand with effective character
                  animations. This can help you expand your business
                  effectively. Our animators will breathe into life characters
                  for you, that are relatable and memorable. From branding to
                  storytelling, you can have an emotional connection with your
                  audience through our animations.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Motion Graphics for Marketing</h3>
                <p>
                  Take your marketing campaigns to the next level with our
                  motion graphics. Our animators collaborate with our{" "}
                  <Link className="link" href="/graphics-design">
                    graphics team
                  </Link>{" "}
                  to craft amazing visuals that grab attention and convey
                  messages clearly which creates a long-lasting effect on the
                  mind of a potential customer. These animations enhance your
                  identity online and bring more traffic to your socials.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/2d-and-3d-animations/motion-graphics.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/2d-and-3d-animations/3d-visualization.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>3D Visualization</h3>
                <p>
                  With stunning 3d visualizations, you can transform your ideas
                  into reality. Our talented artists create lifelike renderings
                  of products, spaces, or concepts, which gives your audience a
                  clear and immersive experience of what to expect. 3D
                  visualization sparks curiosity and excitement, making your
                  brand unforgettable.
                </p>
              </div>
            </div>
          </div>
          <div className="separate"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Animations;
