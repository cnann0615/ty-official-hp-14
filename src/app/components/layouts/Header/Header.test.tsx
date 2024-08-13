import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Header コンポーネント", () => {
  test("クラッシュせずにレンダリングされる", () => {
    render(<Header />);
  });

  test("ロゴ画像がレンダリングされる", () => {
    render(<Header />);
    const logo = screen.getAllByAltText("teamIcon");
    expect(logo).toHaveLength(2);
  });

  test("メインタイトルリンクが正しいテキストでレンダリングされる", () => {
    render(<Header />);
    const mainTitleLink = screen.getByText("Tetsuya Yamada");
    expect(mainTitleLink).toBeInTheDocument();
    expect(mainTitleLink).toHaveAttribute("href", "/");
  });

  test("ナビゲーションリンクがレンダリングされる", () => {
    render(<Header />);
    const navLinks = [
      { text: "Top", href: "/" },
      { text: "Profile", href: "/profile" },
      { text: "Gallery", href: "/gallery" },
      { text: "Blog", href: "/blog" },
      { text: "Contact", href: "/contact" },
    ];

    navLinks.forEach((link) => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute("href", link.href);
    });
  });

  test("HeaderHamburger コンポーネントがレンダリングされる", () => {
    render(<Header />);
    const hamburgerMenu = screen.getByRole("button");
    expect(hamburgerMenu).toBeInTheDocument();
  });
});
