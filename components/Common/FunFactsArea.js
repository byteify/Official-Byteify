import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <>
            <div className="funfacts-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>We always try to understand users expectation</h2>
                        <div className="bar"></div>
                        <p>
                        The most important thing for us has always been client satisfaction. We have numerous satisfied clients from all over the world. 
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>100+</h3>
                                <p>Happy clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>50+</h3>
                                <p>Feedbacks</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>20+</h3>
                                <p>Workers</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>70+</h3>
                                <p>Contributors</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Have any question about us?</h3>
                        <p>Don't hesitate to contact us</p>

                        <Link href="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunFactsArea;