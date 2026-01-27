import React from "react";
// CSS is imported in _app.js as per Next.js global styles rule

const CircleGlow = ({ imgSrc }) => {
    return (
        <div className="circle-glow-wrapper">
            <span className="glow outer"></span>
            <span className="glow middle"></span>

            <div className="profile">
            </div>
        </div>
    );
};

export default CircleGlow;
