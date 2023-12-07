import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
    const features = [
        {
            title:`Design and Development`,
            desc:`Our well-experienced team knows no limits and will work with you, understand your needs and craft a well-suited design and website for your business that truly represents your brand.`,
            icon: <Icon.Server />,
            href:'/website-development'
        },
        {
            title:`Shopify Development Services`,
            desc:`Bytefiy technology knows the importance of online presence for your business, for which you need a well-crafted e-commerce platform.`,
            icon: <Icon.Code />,
            href:'/shopify-development-services'

        },
        {
            title:`Digital Marketing Services`,
            desc:`A well-designed website is not enough. In order to generate traffic, you need a site that is well-optimized for Search Engines, a good online presence, and healthy social media management.`,
            icon: <Icon.GitBranch />,
            href:'/social-media-marketing'
        },
        {
            title:`Data Analytics and Machine Learning`,
            desc:`With the power of data analytics and machine learning, you can understand your customers better, improve your sales on different campaigns and strategies.`,
            icon: <Icon.Codesandbox />,
            href:'/data-analytics-and-machine-learning'
        },
    ]
    return (
        <>
            <div className="boxes-area">
                <div className="container">
                    <div className="row">
                        {
                            features?.map(({title, desc, icon, href})=>(
                                <div key={title} className="col-lg-3 col-md-6">
                            <div  className="w-full single-box">
                                <div className="icon">
                                    {icon}
                                </div>

                                <h3>
                                    <Link href={href}>
                                        {title}
                                    </Link>
                                </h3>

                                <p>{desc}</p>
                                <Link href={href} className='btn btn-primary'>Read More</Link>
                            </div>
                        </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;
