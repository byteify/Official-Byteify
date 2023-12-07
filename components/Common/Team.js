import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Team = () => {

    const team = [
        {
            name:"Emily Carter",
            position:'Chief Creative Officer',
            desc:`Emily is a visionary designer with a passion for crafting stunning and user-friendly websites. With her artistic flair and a keen eye for detail, she ensures every project represents the brand's unique identity.`,
            image:`/images/team-image/team1.jpg`
        },
        {
            name:"Alex Johnson",
            position:'Leader Developer',
            desc:`Alex is a seasoned developer with a wealth of experience in creating high-performance websites and mobile applications. With a focus on seamless user experiences, he brings technical excellence to every project.`,
            image:`/images/team-image/team2.jpg`,
        },
        {
            name:"Sophia Lee",
            position:'Digital Marketing Strategist',
            desc:`Sophia is a data-driven marketer who loves uncovering insights and creating winning strategies. Her expertise in digital marketing ensures your business reaches its target audience effectively.`,
            image:`/images/team-image/team3.jpg`,
        },
        {
            name:"James Wilson",
            position:'Shopify Expert',
            desc:`James is a Shopify guru who can turn your online store dreams into reality. With an in-depth understanding of e-commerce, he crafts powerful solutions that enhance your store's performance.`,
            image:`/images/team-image/team4.jpg`,
        },
        {
            name:"Michael Chen",
            position:'Data Scientist & AI Specialist',
            desc:`Michael is a data enthusiast with a passion for extracting valuable insights from complex data sets. His expertise in AI and machine learning helps businesses make data-driven decisions.`,
            image:`/images/team-image/team5.jpg`,
        },
        {
            name:"Olivia Adams",
            position:'Business Analyst',
            desc:`Olivia is an analytical thinker who loves delving into customer data to uncover actionable insights. Her recommendations help businesses optimize their sales funnel and achieve better ROI`,
            image:`/images/team-image/team3.jpg`,
        },
    ]


    return (
        <>
            <div className="team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet our experienced team</h2>
                        <div className="bar"></div>
                        <p>Meet our exceptional team at Byteify Technologies, a group of experts dedicated to boosting your online presence.</p>
                    </div>
                </div>

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1500: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="team-slider"
                >
                    {
                        team?.map(({name, desc, position, image})=>(
                            <SwiperSlide>
                        <div className="single-team">
                            <div className="team-image">
                                <img src={image} alt="image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>{name}</h3>
                                    <span>{position}</span>
                                </div>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                            ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Team;