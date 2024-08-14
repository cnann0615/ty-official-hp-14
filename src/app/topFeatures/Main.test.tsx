import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Main from "./Main";

describe("Mainコンポーネント", () => {
  test("クラッシュせずにレンダリングされる", () => {
    render(<Main />);
  });

  test("ImageSliderコンポーネントがレンダリングされる", () => {
    render(<Main />);
    const imageSlider = screen.getByTestId("image-slider");
    expect(imageSlider).toBeInTheDocument();
  });

  test("TimeFadeIn コンポーネントがレンダリングされる", () => {
    render(<Main />);
    const timeFadeIn = screen.getByTestId("time-fade-in");
    expect(timeFadeIn).toBeInTheDocument();
  });

  test("メッセージ「夢を持ち、、、」がレンダリングされる", () => {
    render(<Main />);
    const massage = screen.getByRole("heading");
    expect(massage).toBeInTheDocument();
    expect(massage).toHaveTextContent(
      "夢を持ち、実現に向け一歩踏み出す勇気！！"
    );
  });
});
