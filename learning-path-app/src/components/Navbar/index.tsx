import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Learning Path
        </Link>
        <div>
          <Link href="/" className="text-gray-300 hover:text-white mr-4">
            Home
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white mr-4">
            Dashboard
          </Link>
          <Link href="/quiz" className="text-gray-300 hover:text-white">
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}
