import React from 'react';

const AnimatedProjectTitle = () => {
    const animationStyle = {
        animation: 'projectTitleSlideIn 0.5s ease-out forwards',
        animationKeyframes: `
            @keyframes projectTitleSlideIn {
                from {
                    transform: translateY(-100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        `
    };

    return (
        <>
            <style>{animationStyle.animationKeyframes}</style>
            <h2 className="text-left pl-60 pb-10 text-4xl sm:text-5xl lg:text-6xl text-white font-bold pt-140" style={{ animation: animationStyle.animation }}>
                /Projecten
            </h2>
        </>
    );
};

export default AnimatedProjectTitle;
