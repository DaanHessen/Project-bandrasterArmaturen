"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projecten from 'app/components/Projecten.jsx'; // Adjust the path as per your project structure

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const images = [
        { url: '/images/image1.jpeg', title: 'Project titel 1 | 23 november 2023' },
        { url: '/images/image2.jpeg', title: 'Project titel 2 | 19 april 2021' }
    ];

    const slideRef = useRef();

    const properties = {
        duration: 10000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: false,
        pauseOnHover: false,
        canSwipe: false,
        autoplay: true, 
        easing: "ease",
    };

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const goToPrevious = () => {
        slideRef.current.goBack();
    };

    const goToNext = () => {
        slideRef.current.goNext();
    };

    return (
        <main className={` bg-white flex flex-col relative ${!isLoaded ? 'invisible' : ''}`} style={{ minHeight: '100vh' }}>
            <style>
                {`
                    .image-title {
                        opacity: 0;
                        animation: fadeIn 1s ease-in forwards;
                    }
                    @keyframes fadeIn {
                        to {
                            opacity: 1;
                        }
                        .slide-container {
                          background-color: #yourDesiredColor;
                    }
                `}
            </style>
            <div className="absolute w-full slide-container">
                <Slide ref={slideRef} {...properties}>
                    {images.map((each, index) => (
                        <div key={index} className="each-slide">
                            <div style={{ 'backgroundImage': `url(${each.url})` }} className="w-full h-screen bg-cover bg-center flex justify-between items-end p-10">
                                <h2 className={`text-white font-normal text-xl image-title  ${isLoaded ? 'animate' : ''}`}>{each.title}</h2>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
            <div className={`z-10 relative ${isLoaded ? '' : 'invisible'}`}>
                <Header />
                <div className="container mx-auto px-12 py-4">
                    <HeroSection />
                </div>
                
                {/* Moved buttons container here, before the Projecten component */}
                <div className="container mx-auto px-12 py-4 flex justify-end space-x-2 mb-4">
                    <button onClick={goToPrevious} className="bg-white text-black font-bold p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                        &lt;
                    </button>
                    <button onClick={goToNext} className="bg-white text-black font-bold p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                        &gt;
                    </button>
                </div>
                
                {/* Increased top margin for Projecten component to push it down further */}
                <div className="container mx-auto px-12 pt-130 pb-4"> {/* Adjust pt-20 as necessary */}
                    <Projecten />
                </div>
            </div>
        </main>
    );
}
