"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Dilek() {
  const router = useRouter();

  return (
    <main className="bg-gray-200 h-screen flex flex-col items-center min-h-full overflow-y-auto">
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

      <div className="flex flex-col items-center w-full gap-4 pt-36 px-4 sm:pt-36">
        <h1 className="text-3xl sm:text-5xl drop-shadow-2xl text-center">
          Anlatacak çok şey var ama...
        </h1>
      </div>

      <div className="flex flex-col items-center w-full gap-4 pt-8 px-4 sm:pt-12">
        <h1 className="text-lg sm:text-2xl text-center">
          Sana olan hislerimi tanımlayacak bir kelime, cümle henüz yok. Seni çok
          seviyorum. Deliler gibi aşığım sana Beyza'm. Bin defa dünyaya gelsem
          her seferinde sana vurulurdum.
        </h1>
        <br />
        <h1 className="text-lg sm:text-2xl text-center">
          "Hep" ve "Asla" kullanarak kurduğum cümleleri tasvip etmiyorsun ama
          müsaadenle başlıyorum. Hep seninle, yanında olacağım. Ne zaman
          istersen yardımına koşacağım. Bu kalp hep senin için atacak. Sen beni
          sevmeyi bırakmazsan ben senden asla vazgeçmeyeceğim, asla seni sevmeyi
          bırakmayacağım.
        </h1>
        <br />
        <h1 className="text-lg sm:text-2xl text-center">
          Şakayla karışık diyorum ama gerçek şu ki ben senin tapulu malınım. Ben
          seninim. Sana uzun zamandır teslim olmuş haldeyim. Dediklerimde bir
          tutam abartmıyorum, yalan da söylemiyorum. Şu ana kadar ne söylediysem
          hepsi için de söz veriyorum, ne dediysem yapacağım ve yapıyorum da.
        </h1>
        <br />
        <h1 className="text-2xl sm:text-3xl text-center">
          Son olarak, SENİ SEVİYORUM BEYZA! Beraber nice sevgililer günleri
          geçirmek dileğiyle.
        </h1>
      </div>
    </main>
  );
}
