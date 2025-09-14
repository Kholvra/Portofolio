import { myFace } from "../assets/index";
import Image from "../Components/Image";

function About() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen gap-12 lg:gap-20 justify-center items-center px-6 py-12">
      <div className="w-2/3 max-w-xs lg:w-1/3 lg:max-w-sm">
          <Image source={myFace} />
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">THE PHILOSOPHY</h2>
        <p className="flex flex-col gap-5 text-base md:text-lg text-center lg:text-left">
          <span className="text-gray-300">
              I believe that great software is born from the intersection of
              technical mastery and human empathy. Every line of code I write serves
              a purpose: to solve real problems, enhance user experiences, and push
              the boundaries of what's possible on the web.
          </span>
          <span className="text-gray-400">
            My approach is rooted in precision and clarity. I don't just build
            applications—I architect digital experiences that are intuitive,
            performant, and built to last. Whether it's crafting pixel-perfect
            interfaces or optimizing complex algorithms, I'm driven by the
            pursuit of excellence in every detail.
          </span>
          <span className="text-gray-500">
            When I'm not immersed in code, you'll find me exploring emerging
            technologies, contributing to open-source projects, or mentoring
            fellow developers. Technology evolves rapidly, and I believe in
            staying at the forefront of innovation.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
