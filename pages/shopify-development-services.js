import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";

const ShopifyDevelopmentServices = () => {
  return (
    <>
     <Head>
        <title>Shopify Development Services | Byteify Technologies</title>
        <meta
          name="description"
          content="Byteify Technologies can build aesthetic stores that will convert e-window shoppers into buyers. With Shopify, we will create cool stores for you to boost your sales."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Shopify Development Services"
        pageDesc={`
        Our expertise is providing prime Shopify development services. We provide a comprehensive one-in-all e-commerce solution to all the needs of your business. We will create and manage your online store which will have a wide variety of features, as per your requirements. Whether you need a new Shopify store to be created or want your existing Shopify store to be revamped, we’ve got you covered. 
                `}
      />

      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/shopify-development-services/storefront-creation.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Shopify Store Creation/Setup</h3>
                <p>
                Have a time and cost-efficient option with customized Shopify Store Development Services. With a flexible and stable option, you can have a unique online store with a concrete foundation and save your resources with Byteify Technologies. 
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Shopify Customized Theme Development</h3>
                <p>
                Increase your store’s performance and get better conversion rates with Shopify Customized themes. Maximize your potential by having a custom design and better performance optimization. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/shopify-development-services/shopify-customized-theme.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/shopify-development-services/app-and-plugin-integration.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>App and Plugin Integration</h3>
                <p>
                Increase your store’s functionality with app and plugin integration. You can add your functionality with millions of users by integrating your app with your online store. You can optimize store performance with carefully selected add-ons.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Mobile Optimization</h3>
                <p>
                Mobile optimization is crucial for a Shopify store. Ensuring that your store is optimized for mobile responsiveness can help you attract more users and get more traffic. A mobile-first design approach is crucial for a better experience while using tablets or smartphones. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/shopify-development-services/mobile-optimization.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/shopify-development-services/payment-gateway-integration.png"
                className="animate__animated animate__fadeInUp services-image"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Payment Gateway Integration</h3>
                <p>
                Secure and seamless integration of payment gateways to allow secure and safe transactions, so that customers can trust you with their sensitive information etc. You can use multiple payment options to cater to a diverse customer base.
                </p>
              </div>
            </div>
          </div>
          <div className="separate"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Product Upload and Management</h3>
                <p>
                Effortlessly upload and manage your product inventory. For easy navigation, you can organize and categorize products. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/shopify-development-services/product-upload-and-management.png"
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

export default ShopifyDevelopmentServices;
