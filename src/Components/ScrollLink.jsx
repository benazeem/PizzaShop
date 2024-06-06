// src/ScrollLink.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

const ScrollLink = ({ to, children, ...rest }) => {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === to.split('#')[0]) {
      e.preventDefault();
      const elementId = to.split('#')[1];
      scroller.scrollTo(elementId, {
        duration: 1500,
        delay: 0,
        smooth: 'easeInOut',
      });
    }
  };

  return (
    <Link to={to.split('#')[0]} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default ScrollLink;
