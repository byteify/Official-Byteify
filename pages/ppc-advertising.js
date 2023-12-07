import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";
const PPCAdvertising = () => {
  return (
    <>
      <Head>
        <title>PPC Advertising | Byteify Technologies</title>
        <meta
          name="description"
          content="Get quick engagement and traffic to your website with Byteify Technologies’ PPC advertising service. Read more !"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="PPC Advertising"
        pageDesc={`
        Looking for quick results? Use the power of PPC advertising and get instant results and get known in the online world right away. In the world of high competition where every click counts, we specialize in Pay-per-Click(PPC) advertising, a strategic approach where you can reach out to customers effectively. You can reach the right audience at the right time with a team of seasoned experts. We make effective campaigns that keep in mind search engines, display networks, social media platforms, and even video channels. We maximize the ROI by driving clicks, convos, and brand visibility.
                `}
      />
      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/ppc-advertising-services/seach-engine-advertising.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Search Engine Advertising (SEA)</h3>
                <p>
                  We can help you maximize your brand visibility with targeted
                  Search Engine Ads(SEAs). Our PPC experts create strategic
                  campaigns that display our visually appealing ads when a
                  keyword related is searched on search engines like Google.
                  From keyword research to ad copywriting, we optimize
                  everything for you to drive clicks, conversations, and a
                  strong ROI.
                </p>
              </div>
            </div>
          </div>
          <div className="separate"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Display Advertising</h3>
                <p>
                  Capture the attention of your potential audience with our
                  visually engaging display ads. Our team designs and places ads
                  on relevant websites, to take your message to the relevant
                  users and drive traffic. With our eye-catching visuals created
                  by our talented graphics team and compelling copy written by
                  our content writers, we spark interest and encourage users to
                  explore your sites and socials.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/ppc-advertising-services/display-advertising.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/ppc-advertising-services/remarketing-campaigns.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Remarketing Campaigns</h3>
                <p>
                  You can reconnect with potential customers who may have
                  previously visited your website with our remarketing
                  campaigns. In our remarketing campaigns, we position ads
                  accordingly in front of past visitors when they visit other
                  sites. This helps keep your brand on top of their minds and
                  encourages them to buy from you.
                </p>
              </div>
            </div>
          </div>
          <div className="separate"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Social Media Advertising</h3>
                <p>
                  With our social media advertising services, you can tap into
                  the power of social media with targeted ads. Our experts
                  create campaigns on social media platforms like Facebook,
                  Instagram, Snapchat, TikTok, LinkedIn, etc. These campaigns
                  help you reach your desired audience on the basis of
                  demographics, interests, and behaviors, which leads to
                  increased engagements and conversations.
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/ppc-advertising-services/social-media-advertising.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/ppc-advertising-services/video-advertising.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Video Advertising</h3>
                <p>
                  You can engage with audiences through videos within our PPC
                  campaigns. We create video content that turns scrollers into
                  listeners. We create content that sells, on platforms like
                  Youtube, etc, and such content slips in between the users’
                  feeds when they are consuming content. These ads convey your
                  message visually and leave a memorable impact, driving brand
                  awareness and driving traffic.
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
export default PPCAdvertising;
