export default function Button({text}) {
  return (
    <a
      href="#"
      className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
    >
      {text}
    </a>
  );
}
