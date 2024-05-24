"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Dilek() {
  const router = useRouter();

  return (
    <main className="bg-gray-200 h-screen items-center min-h-full">
      <button
        className="absolute top-0 flex justify-center w-full items-center p-6"
        onClick={() => {
          console.log("Seni seviyorum!");
          router.push("/Siirler");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-violet-900 transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 19a1 1 0 0 1-1-1V2.707l-6.646 6.647a1 1 0 1 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 1 1-1.414 1.414L11 2.707V18a1 1 0 0 1-1 1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="justify-center flex w-full gap-4 items-center pt-36">
        <h1 className="text-5xl drop-shadow-2xl">
          Anlatacak çok şey var ama...
        </h1>
      </div>

      <div className="justify-center flex-col w-full gap-4 items-center pt-12 px-12">
        <h1 className="text-2xl">
          Sana olan hislerimi tanımlayacak bir kelime, cümle henüz yok. Seni çok
          seviyorum. Deliler gibi aşığım sana Beyza'm. Bin defa dünyaya gelsem
          her seferinde sana vurulurdum.
        </h1>
        <br></br>
        <h1 className="text-2xl">
          "Hep" ve "Asla" kullanarak kurduğum cümleleri tasvip etmiyorsun ama
          müsaadenle başlıyorum. Hep seninle, yanında olacağım. Ne zaman
          istersen yardımına koşacağım. Bu kalp hep senin için atacak. Sen beni
          sevmeyi bırakmazsan ben senden asla vazgeçmeyeceğim, asla seni sevmeyi
          bırakmayacağım.
        </h1>
        <br></br>
        <h1 className="text-2xl">
          Şakayla karışık diyorum ama gerçek şu ki ben senin tapulu malınım. Ben
          seninim. Sana uzun zamandır teslim olmuş haldeyim. Dediklerimde bir
          tutam abartmıyorum, yalan da söylemiyorum. Şu ana kadar ne söylediysem
          hepsi için de söz veriyorum, ne dediysem yapacağım ve yapıyorum da.
        </h1>
        <br></br>
        <h1 className="text-3xl">
          Son olarak, SENİ SEVİYORUM BEYZA! Beraber nice sevgililer günleri
          geçirmek dileğiyle.
        </h1>
      </div>
    </main>
  );
}
