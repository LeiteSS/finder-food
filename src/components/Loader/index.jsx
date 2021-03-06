import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/15343-t.json';

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />
};