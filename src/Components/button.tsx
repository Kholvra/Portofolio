type Props = {
  text: string;
  link: string;
};

function Button({ text, link }: Props) {
  let variant;
  if (link) {
    variant = (
      <a
        href={link}
        target="_blank"
        className="rounded-lg border p-3 px-6 text-sm cursor-pointer border-stone-300/50"
      >
        {text}
      </a>
    );
  } else {
    variant = (
      <button className="rounded-lg border p-3 px-6 text-sm cursor-pointer border-stone-300/50">
        {text}
      </button>
    );
  }

  return variant;
}

export default Button;
