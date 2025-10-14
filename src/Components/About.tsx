import { myFace } from "../assets/index";
import Image from "./Image";

function About() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen gap-12 lg:gap-20 justify-center items-center px-6 py-12">
      <div className="w-2/3 max-w-xs lg:w-1/3 lg:max-w-sm">
        <Image source={myFace} grayscale={true} />
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          ABOUT
        </h2>
        <p className="flex flex-col gap-5 text-base md:text-lg lg:text-xl text-center lg:text-left leading-relaxed text-gray-300">
          <span>
            Hello, I'm Sabri. I’m a developer driven by a passion for bringing
            ideas to life. My journey with code began with a simple spark of
            curiosity during a long break. I started exploring free courses on
            YouTube and quickly fell in love with the process. The moment my
            first lines of code transformed into a functional website felt like
            pure magic. From that point on, I knew this was the world I wanted
            to explore, and I've been teaching myself ever since.
          </span>
          <span>
            That initial curiosity has since grown into a deeper passion for
            building things. For me, coding is another way to design and
            customize systems. It’s a passion that extends beyond the screen,
            whether I’m crafting adventures in a D&D campaign or meticulously
            ricing my Linux setup for the perfect workflow. This portfolio is a
            living journal of that journey, a collection of projects that I'm
            excited to keep growing.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
