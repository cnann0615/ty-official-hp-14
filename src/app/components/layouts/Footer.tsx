import Image from "next/image";
import Link from "next/link";

// フッター

function Footer() {
  return (
    <footer className="bg-violet-900 text-white py-8">
      <div className="px-[2.5%] md:px-[5%] ">
        <div className="flex px-8 gap-28 md:gap-40">
          {/* メニュー */}
          <div>
            <h3 className="text-xl underline decoration-yellow-500 mb-4">
              Menu
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-violet-300">
                  Top
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-violet-300">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-violet-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-violet-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* SNSリンク */}
          <div className="space-y-4">
            <h3 className="text-xl underline decoration-yellow-500 mb-4">
              Follow Me!!
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tetsu.yamada94/"
                className="hover:text-violet-300"
              >
                <Image
                  src="/images/icon/instagram.png"
                  alt="Instagram Logo"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://twitter.com" className="hover:text-violet-300">
                <Image
                  src="/images/icon/x.png"
                  alt="Twitter Logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
