import type { TechDataType } from "@/Types";

const TechStack: TechDataType = [
  {
    name: "LANGUAGES",
    data: ["TypeScript", "JavaScript", "Java"],
  },
  {
    name: "FRONTEND",
    data: ["React.js", "TailwindCSS"],
  },
  {
    name: "BACKEND",
    data: ["Node.js", "Express.js"],
  },
  {
    name: "TOOLS",
    data: ["Figma", "Framer Motion"],
  },
];

function Tech() {
  return (
    <section className="flex flex-col w-full lg:w-3/4 lg:mx-auto min-h-screen gap-12 lg:gap-20 justify-center px-6 py-12">
      <h2 className="font-bold self-center text-center text-[clamp(2.5rem,1rem+6vw,3.75rem)]">MY TOOLKIT</h2>
      <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-8 md:gap-15">
        {TechStack.map((item) => {
          return (
            <div key={item.name} className="flex flex-col gap-4 lg:gap-5">
              <h3 className="pb-2 border-b border-stone-700 text-lg md:text-xl font-semibold">{item.name}</h3>
              <div className="flex flex-col gap-1 text-base text-stone-300">
                {item.data.map((itemData) => {
                  return <span key={itemData}>{itemData}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tech;
