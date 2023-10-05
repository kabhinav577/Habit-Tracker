import React from 'react';

const Footer = () => {
  return (
    <>
      <hr className="w-2/3 mx-auto border border-slate-500 mb-2" />
      <div className="flex justify-center items-center text-slate-400 mb-4">
        Design By
        <a
          href="https://www.linkedin.com/in/krishna-kant-singh-ab391a1b1/"
          target="_blank"
          rel="noreferrer"
          className="ml-2 hover:text-red-400"
        >
          Krishna kant singh
        </a>
      </div>
    </>
  );
};

export default Footer;
