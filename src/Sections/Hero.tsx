function Hero() {
  return (
    <section className="flex flex-col w-full gap-5 justify-center items-center min-h-screen px-6 text-center">
      <h1 className="font-bold text-[clamp(3rem,1rem+8vw,6rem)] leading-tight">SABRI SIRAJ KHOLBI</h1>
      <span className="font-medium text-[clamp(1.5rem,1rem+2vw,1.875rem)]">
        Built with Code & Clarity.
      </span>
      <p className="max-w-2xl mx-auto leading-relaxed text-base text-gray-500">
        I'm a software engineer who transforms complex problems into elegant
        digital solutions. Specializing in modern web technologies, I craft
        applications that balance technical excellence with exceptional user
        experiences.
      </p>
    </section>
  );
}

export default Hero;
