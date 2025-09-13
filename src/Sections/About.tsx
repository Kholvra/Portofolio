import { myFace } from "../assets";
import Image from "../Components/Image";

function About() {
  return (
    <section className="flex flex-row w-3/4 gap-50 h-screen justify-center items-center p-10">
      <div className="size-100">
          <Image source={myFace} />
      </div>
      <div className="flex flex-col gap-10 w-1/2">
        <h2 className="text-7xl font-bold">THE PHILOSOPHY</h2>
        <p className="flex flex-col gap-5 text-xl">
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
