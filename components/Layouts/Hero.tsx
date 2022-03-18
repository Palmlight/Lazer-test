import React from "react";

interface HeroProps {
  name: string;
  linkTitle: string;
}

const Hero = ({ name, linkTitle }: HeroProps) => {
  return (
    <section className="bg-lzHeroBg py-24">
      <div className="global-inner-container">
        <h1 className="font-Inter text-3xl font-bold text-lzheroBlack">
          {name}
        </h1>
        {/* <h2>{linkTitle}</h2> */}
        <ul className="flex items-center gap-1 font-Lato text-sm mt-1">
          <li>Home</li>
          <li>.</li>
          <li>Pages</li>
          <li>.</li>
          <li className="text-lzNavPink">{linkTitle}</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
