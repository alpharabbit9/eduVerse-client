import React from 'react';

const SectiionCover = ({ image, title, subtiitle }) => {
    return (
        <div
            className="hero h-[400px]"
            style={{
                backgroundImage:
                    `url(${image})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                       {subtiitle}
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default SectiionCover;