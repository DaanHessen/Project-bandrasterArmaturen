"use client";
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projecten from 'app/components/Projecten.jsx'; 
import SlideshowComponent from 'app/components/SlideshowComponent.jsx'; // Import the SlideshowComponent

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
            <SlideshowComponent images={images} /> {/* Use the SlideshowComponent */}
            <div className="z-10 relative">
                <Header />
                <HeroSection />
                {/* Title before Projecten */}
                <h2 className="text-left pl-40 text-4xl sm:text-5xl lg:text-6xl text-white font-bold pt-140">/Projecten</h2>
            </div>
            {isLoaded && <Projecten />}
        </div>
    );
}
