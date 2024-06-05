"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const TimeFadeIn = ({ children, time }: any) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // コンポーネントがマウントされた後、3秒後に isVisibleをtrue に設定
    const timer = setTimeout(() => {
      setInView(true);
    }, time); // 500ミリ秒 = 0.5秒

    // コンポーネントがアンマウントされた際にタイマーをクリア
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${
        inView ? "opacity-100" : "opacity-0 translate-x-[-50%]"
      } duration-[1s]`}
    >
      {children}
    </div>
  );
};

export const Animation = ({
  children,
  animation,
  rootMargin,
}: {
  children: any;
  animation: string;
  rootMargin: string;
}) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: rootMargin,
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "animate__animated animate__" + animation : "opacity-0"
      } `}
    >
      {children}
    </div>
  );
};
