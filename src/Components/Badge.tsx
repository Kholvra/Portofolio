type Props = {
  text: string;
};

function Badge({ text }: Props) {
  return (
      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-stone-300 ">
        {text}
      </span>
  );
}

export default Badge;
