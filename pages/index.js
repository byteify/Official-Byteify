import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/ITStartup/MainBanner";
import Features from "@/components/ITStartup/Features";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";

const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <Team />
            <FunFactsArea />
            <Footer />
        </>
    )
}

export default Index;