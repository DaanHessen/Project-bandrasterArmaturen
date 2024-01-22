import React, { useRef, useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// Assuming globals.css is correctly set up in your project path
import globals from 'app/globals.css';

const SlideshowComponent = ({ images }) => {
    const slideRef = useRef();
    const [blur, setBlur] = useState(0);

    const properties = {
        duration: 10000,
        transitionDuration: 800,
        infinite: true,
        indicators: true,
        arrows: false,
        pauseOnHover: false,
        canSwipe: false,
        autoplay: true,
        easing: "ease",
    };
 

    // Function to handle scroll and update blur
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newBlur = Math.min(20, scrollY / 300); // blur increases by 1 for every 300px scrolled
        setBlur(newBlur);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0">
            <Slide ref={slideRef} {...properties}>
                {images.map((image, index) => (
                    <div key={index} className="each-slide relative">
                        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image.url})`, filter: `blur(${blur}px)` }}>
                            {/* Image Title */}
                            <p className="absolute bottom-5 left-5 z-10 text-white text-lg">
                                {image.title}
                            </p>
                        </div>
                    </div>
                ))}
            </Slide>
            <div className="absolute bottom-5 right-5 z-10">
                <button className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-110 mr-2">
                    &lt;
                </button>
                <button className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-110">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default SlideshowComponent;
