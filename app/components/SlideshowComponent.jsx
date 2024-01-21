// SlideshowComponent.jsx
import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
    };

    return (
        <div className="fixed inset-0 z-0">
            <Slide ref={slideRef} {...properties}>
                {images.map((image, index) => (
                    <div key={index} className="each-slide">
                        <div className="w-full h-screen" style={{ backgroundImage: `url(${image.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Empty div for background images */}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default SlideshowComponent;
