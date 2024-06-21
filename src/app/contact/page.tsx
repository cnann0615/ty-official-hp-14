"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

// 問い合わせページ

export default function Contact() {
  // useForm関連
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onSubmit" });

  // EmailJsを使ったメールの送信
  const onSubmit = async (data: Record<string, unknown>) => {
    // EmailJsへの接続
    const serviceId: string =
      process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID!;
    const templateId: string =
      process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID!;
    const publicId: string =
      process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_ID!;
    console.log(serviceId);
    // メールの送信
    try {
      await emailjs.send(serviceId, templateId, data, publicId);
      window.alert("送信しました。");
    } catch (error) {
      window.alert("エラーが出ました" + error);
    }
    // useFormをリセット
    reset();
  };

  return (
    <main className=" w-10/12 mt-5 mb-10 bg-gray-200 border-4 text-black border-black rounded-xl max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* タイトル */}
      <h1 className="text-3xl font-bold mb-6 text-center">お問い合わせ</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 名前 */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-lg font-bold text-gray-700 "
          >
            名前
          </label>
          <input
            type="text"
            // useForm用の記述
            {...register("name", { required: "氏名は必須です。" })}
            id="name"
            name="name"
            className=" p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {/* バリデーションエラー時のメッセージ */}
          <p className="text-red-500 text-xs font-bold ">
            {errors.name?.message as React.ReactNode}
          </p>
        </div>
        {/* メアド */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-lg font-bold text-gray-700"
          >
            メールアドレス
          </label>
          <input
            type="email"
            // useForm用の記述
            {...register("email", {
              required: "※メールアドレスを入力してください。",
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: "※正しいメールアドレスを入力してください。",
              },
            })}
            id="email"
            name="email"
            className=" p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {/* バリデーションエラー時のメッセージ */}
          <p className="text-red-500 text-xs font-bold ">
            {errors.email?.message as React.ReactNode}
          </p>
        </div>
        {/* 問い合わせ内容 */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-lg font-bold text-gray-700"
          >
            問い合わせ内容
          </label>
          <textarea
            id="message"
            // useForm用の記述
            {...register("message", {
              required: "問い合わせ内容は必須です。",
            })}
            name="message"
            rows={14}
            className=" p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {/* バリデーションエラー時のメッセージ */}
          <p className="text-red-500 text-xs font-bold ">
            {errors.message?.message as React.ReactNode}
          </p>
        </div>
        <div>
          ＊回答は記載いただいたメールアドレスに返信させていただきます。
        </div>
        {/* 送信ボタン */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            送信
          </button>
        </div>
      </form>
    </main>
  );
}
