import React, { useEffect } from 'react';
import Typed from 'typed.js';

const MotivationComp = () => {
  useEffect(() => {
    const typed = new Typed('.quote', {
      strings: [
        "...okay. Let's start by tracking a habit for next seven days.",
        "Drop by drop is the water pot filled. -Buddha, So don't miss keep adding good habit everyday.",
        'Happiness is a habit—cultivate it. -Elbert Hubbard',
        'Habits change into character. -Ovid',
        'Good habits formed at youth make all the difference. - Aristotle',
      ],
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 5000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full text-white flex items-center justify-center text-[1rem] p-8 sm:p-16">
      <span className="quote"></span>
    </div>
  );
};

export default MotivationComp;
