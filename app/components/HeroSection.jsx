import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section>
            <div className="max-w-5xl ml-10">
                <div className={`py-4 px-4 text-center sm:text-left mt-12 backdrop-blur ${animate ? 'start-animation' : ''}`}>
                    <h1 className="mb-1 font-bold slide-in-first">
                        <span className="text-5xl sm:text-6xl lg:text-6xl text-white font-bold">
                            Design & vormgeving{" "}
                        </span>
                        <span className="text-5xl sm:text-6xl lg:text-7xl text-[#a41c44] font-bold">
                            'vloeiend'
                        </span>
                    </h1>
                    <h2 className="text-xl sm:text-4xl lg:text-5xl text-white mb-6 slide-in-second font-normal">
                             vertaald in verlichting
                    </h2>
                    <p className="text-lg sm:text-xl text-white mb-0 slide-in-third">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa. 
                    </p>
                    <div className="text-lg slide-in-fourth">
                        <TypeAnimation
                            sequence={[
                                'Wij leveren bandraster armaturen',
                                2000, 
                                'Wij leveren inbouw armaturen',
                                2000,
                                'Wij leveren pendel armaturen',
                                2000,
                                'Wij leveren downlights',
                                2000,
                                'Wij leveren industriële armaturen',
                                2000,
                                'Wij leveren wand/staande armaturen',
                                2000,
                                'Wij leveren openbare verlichting',
                                2000,
                                'Wij leveren terreinverlichting',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-white typing-text backdrop-blur shadow-text"
                            repeat={Infinity}
                        />
                    </div>
                    <div className="mt-4 slide-in-fifth flex">
                        <a href="https://metalmek.nl/producten/" 
                        className="bg-[#a41c44] text-white font-bold py-2 px-4 border-b-4 border-[#500119] rounded transition duration-300 ease-in-out hover:bg-[#b53055] hover:shadow-lg">
                            onze producten
                        </a>
                        <a href="" 
                        className="bg-[#a41c44] text-white font-bold py-2 px-4 border-b-4 border-[#500119] rounded transition duration-300 ease-in-out hover:bg-[#b53055] hover:shadow-lg ml-4">
                            onze projecten
                        </a>
                    </div>


                </div>
            </div>
            <style jsx>{`
                .backdrop-blur, .typing-text {
                    backdrop-filter: blur(4px);
                    background-color: rgba(0, 0, 0, 0.4);
                    border-radius: 10px;
                    animation: fadeInBlur 0.8s ease-out forwards;
                    animation-play-state: paused;
                }

                .shadow-text, .typing-text {
                    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
                }

                .start-animation .backdrop-blur, .start-animation .typing-text {
                    animation-play-state: running;
                }

                @keyframes fadeInBlur {
                    0% {
                        backdrop-filter: blur(0px);
                        background-color: rgba(0, 0, 0, 0);
                    }
                    100% {
                        backdrop-filter: blur(4px);
                        background-color: rgba(0, 0, 0, 0.4);
                    }
                }

                .slide-in-first,
                .slide-in-second,
                .slide-in-third,
                .slide-in-fourth,
                .slide-in-fifth {
                    animation: slideIn 0.8s ease-out forwards;
                    animation-play-state: paused;
                }

                @keyframes slideIn {
                    from {
                        transform: translateX(-50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .button-animate {
                    animation: buttonPulse 1s ease-out forwards;
                    animation-play-state: paused;
                }

                @keyframes buttonPulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                .start-animation .slide-in-first,
                .start-animation .slide-in-second,
                .start-animation .slide-in-third,
                .start-animation .slide-in-fourth,
                .start-animation .slide-in-fifth {
                    animation-play-state: running;
                }

                .start-animation .button-animate {
                    animation-play-state: running;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;