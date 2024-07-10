import { Link } from "react-router-dom";

export default function Button({ text }) {
  return (
    <Link
      to="/tours"
      className="inline-block rounded-md border border-transparent bg-blue-500 px-8 py-3 text-center font-medium text-white hover:bg-blue-600"
    >
      <span>{text}</span>
    </Link>
  );
}
