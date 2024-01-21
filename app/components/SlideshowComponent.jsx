import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import globals from 'app/globals.css';

const SlideshowComponent = ({ images }) => {
    const slideRef = useRef();

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: false,
        canSwipe: false,
        autoplay: true,
        easing: "ease",
        prevArrow: (
            <div className="text-white absolute bottom-5 right-16 z-10 cursor-pointer transition duration-300 ease-in-out hover:scale-110">
                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-full">
                    &lt;
                </button>
            </div>
        ),
        nextArrow: (
            <div className="text-white absolute bottom-5 right-5 z-10 cursor-pointer transition duration-300 ease-in-out hover:scale-110">
                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-full">
                    &gt;
                </button>
            </div>
        ),
    };

    return (
        <div className="fixed inset-0 z-0">
            <Slide ref={slideRef} {...properties}>
                {images.map((image, index) => (
                    <div key={index} className="each-slide relative">
                        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image.url})` }}>
                            {/* Image Title */}
                            <p className="absolute bottom-5 left-5 z-10 text-white text-lg">
                                {image.title}
                            </p>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default SlideshowComponent;
