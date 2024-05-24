"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-gray-200 h-screen items-center min-h-full">
      <div className="justify-center flex w-full gap-4 items-center pt-64">
        <h1 className="text-6xl drop-shadow-2xl">Merhaba</h1>
        <h1 className="text-6xl text-red-600 drop-shadow-2xl">Beyza'm 🍓</h1>
      </div>

      <div className="justify-center flex w-full gap-4 items-center pt-6">
        <h1 className="text-2xl drop-shadow-2xl">Seni çoook seviyorum. Umarım hediyeni beğenirsin.</h1>
      </div>

      <div className="justify-center flex w-full gap-4 items-center pt-6">
        <h1 className="text-xl drop-shadow-2xl">Sevgililer günümüz için hazırladığım sürprizleri görmek için aşağıdaki oka basman yeterli.</h1>
      </div>

      <button className="absolute bottom-0 flex justify-center w-full items-center p-6" onClick={() => {
        console.log("Seni seviyorum!");
        router.push("/Baslangic");
      }}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-violet-900 transform rotate-180"
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
    </main>
  );
}
