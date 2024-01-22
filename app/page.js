"use client";
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projecten from 'app/components/Projecten.jsx'; 
import SlideshowComponent from 'app/components/SlideshowComponent.jsx'; 
import AnimatedProjectTitle from 'app/components/AnimatedProjectTitle.jsx';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const images = [
        { url: '/images/image1.jpeg', title: 'Project titel 1 | 23 november 2023' },
        { url: '/images/image2.jpeg', title: 'Project titel 2 | 19 april 2021' }
    ];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`bg-white ${!isLoaded ? 'invisible' : ''}`}>
            <SlideshowComponent images={images} /> 
            <div className="z-10 relative">
                <Header />
                <HeroSection />
                <AnimatedProjectTitle />
            </div>
            {isLoaded && <Projecten />}
        </div>
    );
}
