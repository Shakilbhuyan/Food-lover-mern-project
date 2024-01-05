import React, { useState } from 'react';

const Logo = () => {
  const [isTwisted, setIsTwisted] = useState(false);

  const handleHover = () => {
    setIsTwisted(!isTwisted);
  };

  const textStyle = {
    fontStyle: isTwisted ? 'italic' : 'normal',
    transition: 'transform 0.5s ease-in-out',
    transform: isTwisted ? 'rotate(180deg)' : 'rotate(0deg)',
    display: 'inline-block',
  };

    return (
        <div className="flex justify-center items-center h-screen">
      <p>
        <span
          className="cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={textStyle}
        >
          Panda's FooD
        </span>
      </p>
    </div>
    );
};

export default Logo;