import Image from "next/image";
import Link from "next/link";
import HeaderHamburger from "./HeaderHamburger";

function Header() {
  return (
    <header className="text-black hadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/top/img11.png"
            alt="teamIcon"
            width={100}
            height={100}
            className=" hidden lg:block w-24 h-24"
          />
          <Image
            src="/images/top/img12.jpeg"
            alt="teamIcon"
            width={100}
            height={100}
            className=" hidden lg:block w-24 h-24"
          />
          <Link
            href="/"
            className="text-3xl md:text-6xl font-bold italic hover:text-yellow-500"
          >
            Tetsuya Yamada
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-8">
          <Link
            href="/"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-3xl font-bold"
          >
            Top
          </Link>
          <Link
            href="/profile"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-3xl font-bold"
          >
            Profile
          </Link>
          <Link
            href="/blog"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-3xl font-bold"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-3xl font-bold"
          >
            Contact
          </Link>
        </nav>
        <HeaderHamburger />
      </div>
    </header>
  );
}

export default Header;
