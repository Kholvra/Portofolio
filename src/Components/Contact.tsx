import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="flex flex-col w-full lg:w-3/4 lg:mx-auto min-h-screen gap-8 lg:gap-15 justify-center items-center px-6 py-12 text-center">
      <div className="flex flex-col items-center gap-4 lg:gap-5">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-[clamp(3rem,1rem+8vw,6rem)] leading-tight"
          id="contact"
        >
          HAVE A PROJECT IN MIND?
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="mailto:sabrisirajkholbiabby@gmail.com"
          className="text-[clamp(1.25rem,1rem+1vw,2.25rem)] break-all hidden lg:block relative hover-underlined"
        >
          sabrisirajkholbiabby@gmail.com
        </motion.a>
      </div>
      <div className="flex flex-row gap-4 lg:gap-10 text-lg font-medium">
        <a href="https://linkedin.com/in/sabrisirajk" target="_blank" className="relative hover-underlined">
          LinkedIn
        </a>
        <a href="https://github.com/Kholvra" target="_blank" className="relative hover-underlined">
          Github
        </a>
        <a
          href="mailto:sabrisirajkholbiabby@gmail.com"
          className="lg:hidden relative hover-underlined"
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
