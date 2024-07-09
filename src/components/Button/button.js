export default function Button({text}) {
  return (
    <a
      href="#"
      className="inline-block rounded-md border border-transparent bg-blue-500 px-8 py-3 text-center font-medium text-white hover:bg-blue-600"
    >
      {text}
    </a>
  );
}
