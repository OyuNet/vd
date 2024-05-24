"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PoemBox from "../components/PoemBox";

export default function Siirler() {
  const router = useRouter();

  return (
    <main className="bg-gray-200 h-screen items-center min-h-full">
      <button
        className="absolute top-0 flex justify-center w-full items-center p-6"
        onClick={() => {
          console.log("Seni seviyorum!");
          router.push("/Beraberiz");
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

      <div className="justify-center flex w-full gap-4 items-center pt-32">
        <h1 className="text-5xl drop-shadow-2xl">
          Hislerim öylesine yoğun ki...
        </h1>
      </div>

      <div className="justify-center flex w-full gap-4 items-center pt-12 px-12">
        <h1 className="text-2xl text-center">
          Sana olan hislerimi şiirler olmadan ifade edemezdim. Bugüne kadar sana
          bir dünya şiir yazdım, kimisini seninle paylaştım, kimisini içime
          gömdüm. Neler yazmışım kısaca bir hatırlayalım.
        </h1>
      </div>

      <div className="justify-center flex w-full gap-4 items-center pt-6 px-12">
        <PoemBox
          poems={[
            "Göz bebeğindeki saklı dünyanın müptelasıyım,",
            "Sesinin her tınısının, ahenginin sevdalısıyım,",
            "Beraber geçireceğimiz günlerin divanesiyim,",
            "Güzide aşkının kokusuyla yanıp tutuşuyorum.",
          ]}
        />
        <PoemBox
          poems={[
            "Ömre bedel seninle geçen her an,",
            "Bir bahar aşkınla aydınlanan her an,",
            "Durur zaman gözlerimiz buluştuğu an,",
            "Uçarım gökyüzüne seni öptüğüm an.",
            "Durmaksızın yeşeriyor, gürleşiyor hislerim,",
            "Çoğalıyor hazinem, yükseliyor arzum,",
            "Gönlümün çiçekleri çoğalıyor mütemadiyen,",
            "Sonsuz aşkınla dolar kalbim, doğarım yeniden.",
          ]}
        />
        <PoemBox
          poems={[
            "Aşkının melodisi çalıyor kalbimde,",
            "Dinledikçe artan özlem, bir hasret,",
            "Göğe çizdiğimiz sevgi dolu resim,",
            "Birlikte geçen ölümsüz portre.",
            "Beraber yaşlanmak bu ömrün tek isteği,",
            "Beraber yaşlanmak bu ömrün tek isteği,",
            "Al bu kalbi, hep sende kalsın, yanında olayım,",
            "Seninle var olmak, benim hayatımın anlamı.",
          ]}
        />
        <PoemBox
          poems={[
            "Buruk gecelerin çilek prensesi,",
            "Esrarlı bakışlarla etrafı süzen,",
            "Yıldızlara anlatılan dilden dile dolaşan bir masal,",
            "Zamanın ötesinde bir gizem,",
            "Aşkla dolu şekerli bir kalp.",
          ]}
        />
      </div>

      <div className="justify-center flex w-full gap-4 items-center pt-6 px-12">
        <h1 className="text-2xl">
          Ve daha niceleri... Yazdım, yazıyorum, yazacağım. Senelerce.
        </h1>
      </div>

      <button
        className="absolute bottom-0 flex justify-center w-full items-center p-6"
        onClick={() => {
          console.log("Seni seviyorum!");
          router.push("/Dilek");
        }}
      >
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
