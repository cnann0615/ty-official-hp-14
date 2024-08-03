"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// アニメーション

// 時差フェードイン（引数directionで左フェードインか右フェードインか決定）

// 何秒後にフェードインするかを引数timeで受け取る
export const TimeFadeIn = ({ children, time, direction }: any) => {
  // time秒後にtrueとする
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // コンポーネントがマウントされた後、time秒後に inViewをtrue に設定
    const timer = setTimeout(() => {
      setInView(true);
    }, time);

    // コンポーネントがアンマウントされた際にタイマーをクリア
    return () => clearTimeout(timer);
  }, []);

  return (
    // inViewがtrueになったらopacity-100となり表示される
    <div
      className={`${inView ? "opacity-100" : `opacity-0 ${direction === "right" ? "translate-x-[50%]" : "translate-x-[-50%]"}`} 
      duration-[1s]`}
    >
      {children}
    </div>
  );
};

// css animate（スクロールに応じて発火系）

// アニメーションの種類（animation)と、どのくらいスクロールした時に発火させるか(rootMargin)を引数で受け取る
export const Animation = ({
  children,
  animation,
  rootMargin,
}: {
  children: any;
  animation: string;
  rootMargin: string;
}) => {
  // ref要素(以下のdivタグ)がrootMarginに来た時点で、inViewがtrueになる
  const { ref, inView } = useInView({
    // ここに位置を設定
    rootMargin: rootMargin,
    // 最初の一度だけ実行
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        // inViewがtrueになったら、引数で受け取ったアニメーションを使用して要素を表示
        inView ? "animate__animated animate__" + animation : "opacity-0"
      } `}
    >
      {children}
    </div>
  );
};
