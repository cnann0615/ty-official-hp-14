import Image from "next/image";
import Link from "next/link";
import HeaderHamburger from "./HeaderHamburger";

// ヘッダー

function Header() {
  return (
    <header className="text-black hadow-md">
      <div className="container mx-auto px-3 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* ロゴ１ */}
          <Image
            src="/images/top/img11.png"
            alt="teamIcon"
            width={100}
            height={100}
            className="hidden lg:block w-24 h-24"
          />
          {/* ロゴ２ */}
          <Image
            src="/images/top/img12.jpeg"
            alt="teamIcon"
            width={100}
            height={100}
            className="hidden lg:block w-24 h-24"
          />
          {/* メインタイトル */}
          <Link
            href="/"
            className="text-4xl xl:text-6xl font-bold hover:text-yellow-500"
          >
            Tetsuya Yamada
          </Link>
        </div>
        {/* メニューバー（画面サイズがlg以上の時) */}
        <nav className="hidden lg:flex space-x-8">
          <Link
            href="/"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-xl xl:text-3xl font-bold"
          >
            Top
          </Link>
          <Link
            href="/profile"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-xl xl:text-3xl font-bold"
          >
            Profile
          </Link>
          <Link
            href="/gallery"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-xl xl:text-3xl font-bold"
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-xl xl:text-3xl font-bold"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:underline underline-offset-8 decoration-yellow-500 text-xl xl:text-3xl font-bold"
          >
            Contact
          </Link>
        </nav>
        {/* ハンバーガーメニュー（画面サイズがlg以下の時） */}
        <HeaderHamburger />
      </div>
    </header>
  );
}

export default Header;
