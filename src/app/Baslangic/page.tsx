"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import prettyMilliseconds from "pretty-ms";

export default function Baslangic() {
  const router = useRouter();

  const meetTime = Date.UTC(2023, 8, 16, 22, 7);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const diff = prettyMilliseconds(currentTime - meetTime, {
    colonNotation: true,
  });
  console.log(diff);

  const [day, setDay] = useState(Number(diff.split(":")[0]));
  const [hour, setHour] = useState(Number(diff.split(":")[1]));
  const [minute, setMinute] = useState(Number(diff.split(":")[2]));
  const [second, setSecond] = useState(
    Number(diff.split(":")[3].split(".")[0]),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1000);

      setSecond((prevSecond) => {
        if (prevSecond >= 59) {
          setMinute((prevMinute) => {
            if (prevMinute >= 59) {
              setHour((prevHour) => {
                if (prevHour >= 23) {
                  setDay((prevDay) => prevDay + 1);
                  return 0;
                }
                return prevHour + 1;
              });
              return 0;
            }
            return prevMinute + 1;
          });
          return 0;
        }
        return prevSecond + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="bg-gray-200 h-screen items-center min-h-full">
      <button
        className="absolute top-0 flex justify-center w-full items-center p-6"
        onClick={() => {
          console.log("Seni seviyorum!");
          router.push("/");
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

      <div className="flex flex-col items-center w-full gap-4 pt-24 px-4 sm:pt-48">
        <h1 className="text-3xl sm:text-5xl drop-shadow-2xl text-center">
          Her şey 16 Eylül 2023 saat 23.08'de başladı...
        </h1>
      </div>

      <div className="flex flex-col items-center w-full gap-4 pt-8 px-4 sm:pt-12">
        <h1 className="text-2xl sm:text-4xl drop-shadow-2xl text-center">
          O dakikadan şu ana kadar:
        </h1>
      </div>

      <div className="flex flex-col items-center w-full gap-4 pt-8 px-4 sm:pt-12">
        <h1 className="text-2xl sm:text-4xl drop-shadow-2xl bg-white rounded-2xl p-4 text-center">
          {day} gün {hour} saat {minute} dakika {second} saniye geçti.
        </h1>
      </div>

      <div className="flex flex-col items-center w-full gap-4 pt-8 px-4 sm:pt-12">
        <h1 className="text-lg sm:text-2xl drop-shadow-2xl m-6 text-center">
          Her saniyesinden inanılmaz keyif aldım, hala da alıyorum; beraber nice
          saniyelere! Kalan ömrümce de aynı keyfi almak istiyorum. Hep yanında
          olmak istiyorum. Şaka değil.
        </h1>
      </div>

      <button
        className="absolute bottom-0 flex justify-center w-full items-center p-6"
        onClick={() => {
          console.log("Seni seviyorum!");
          router.push("/Beraberiz");
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
