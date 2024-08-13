import { render, screen } from "@testing-library/react";
import Footer from "/Users/naoto/Library/Mobile Documents/com~apple~CloudDocs/Engineering/Application/ty-official-hp-14/src/app/components/layouts/Footer";
import "@testing-library/jest-dom";

describe("Footer コンポーネント", () => {
  test("クラッシュせずにレンダリングされる", () => {
    render(<Footer />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Follow Me!!")).toBeInTheDocument();
  });

  test("メニューリンクが正しくレンダリングされる", () => {
    render(<Footer />);
    const links = [
      { text: "Top", href: "/" },
      { text: "Profile", href: "/profile" },
      { text: "Gallery", href: "/gallery" },
      { text: "Blog", href: "/blog" },
      { text: "Contact", href: "/contact" },
    ];

    links.forEach((link) => {
      const element = screen.getByText(link.text);
      expect(element).toBeInTheDocument();
      expect(element.closest("a")).toHaveAttribute("href", link.href);
    });
  });

  test("SNSリンクが正しくレンダリングされる", () => {
    render(<Footer />);
    const snsLinks = [
      {
        href: "https://www.instagram.com/tetsu.yamada94/",
        alt: "Instagram Logo",
      },
      { href: "https://twitter.com", alt: "Twitter Logo" },
    ];

    snsLinks.forEach((link) => {
      const element = screen.getByAltText(link.alt);
      expect(element).toBeInTheDocument();
      expect(element.closest("a")).toHaveAttribute("href", link.href);
    });
  });
});
