import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1A1D24]">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" width={32} height={32} alt="StyloCode Logo" />
        <span className="text-xl font-bold text-white">
          STYLO<span className="text-blue-400">CODE</span>
        </span>
      </Link>
      
      <div className="flex items-center gap-6">
        <Link href="/canvas" className="text-gray-300 hover:text-white">
          Canvas
        </Link>
        <Link href="/design2code" className="text-gray-300 hover:text-white">
          Design to Code
        </Link>
        <Link href="/about" className="text-gray-300 hover:text-white">
          About
        </Link>
      </div>
    </nav>
  );
}