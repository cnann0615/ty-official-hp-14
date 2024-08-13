import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderHamburger from "./HeaderHamburger";
import "@testing-library/jest-dom";

describe("HeaderHamburger", () => {
  test("クラッシュせずにレンダリングされる", () => {
    render(<HeaderHamburger />);
  });

  test("初期状態でメニューが閉じている", () => {
    render(<HeaderHamburger />);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  test("ボタンをクリックするとメニューの表示がトグルされる", () => {
    render(<HeaderHamburger />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  test("メニューが開いているときに正しいリンクが表示される", () => {
    render(<HeaderHamburger />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(5);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/profile");
    expect(links[2]).toHaveAttribute("href", "/gallery");
    expect(links[3]).toHaveAttribute("href", "/blog");
    expect(links[4]).toHaveAttribute("href", "/contact");
  });

  test("各リンクをクリックするとメニューが閉じる", () => {
    render(<HeaderHamburger />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const link1 = screen.getByText("Top");
    fireEvent.click(link1);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    fireEvent.click(button);
    const link2 = screen.getByText("Profile");
    fireEvent.click(link2);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    fireEvent.click(button);
    const link3 = screen.getByText("Gallery");
    fireEvent.click(link3);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    fireEvent.click(button);
    const link4 = screen.getByText("Blog");
    fireEvent.click(link4);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    fireEvent.click(button);
    const link5 = screen.getByText("Contact");
    fireEvent.click(link5);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});
