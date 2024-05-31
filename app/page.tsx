import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between gap-10 p-3">
      <div className="w-full flex flex-wrap gap-4">
        {/* Small Card 1 */}
        <div className="max-w-64 md:w-full bg-stone-100 text-slate-900">
          <div className="bg-[url('./pexels-pixabay-57705.jpg')] h-40 bg-cover bg-center"></div>
          <div className="flex flex-col p-4">
            <h2 className="mb-4 font-bold text-lg">Heading</h2>
            <p>
              Id venenatis a condimentum vitae sapien pellentesque habitant.
            </p>
            <div className="mt-4 flex justify-end">
              <button className="w-fit p-2 text-sm bg-slate-950 text-slate-200 rounded-lg">
                CTA Here
              </button>
            </div>
          </div>
        </div>
        {/* {Small Card 2} */}
        <div className="max-w-64 text-white text-center grid bg-cover bg-[url('./pexels-pixabay-57705.jpg')]">
          <div className="p-4 col-start-1 row-start-3 bg-gray-800 bg-opacity-70 w-full h-full">
            <h2 className="mb-4 font-bold text-lg">Heading</h2>
            <p>
              Id venenatis a condimentum vitae sapien pellentesque habitant.
            </p>
            <div className="mt-4 flex justify-end">
              <button className="w-fit p-2 text-sm bg-slate-950 text-slate-200 rounded-lg">
                CTA Here
              </button>
            </div>
          </div>
        </div>
        {/* Small Card 3 */}
        <div className="max-w-64 md:w-full bg-stone-100">
          <div className="flex flex-col p-6 text-slate-900">
            <div className="self-center bg-[url('./pexels-pixabay-57705.jpg')] h-24 w-24 bg-cover bg-center rounded-full mb-5"></div>
            <h2 className="mb-4 font-bold text-lg">Heading</h2>
            <p>
              Id venenatis a condimentum vitae sapien pellentesque habitant.
            </p>
            <div className="mt-4 flex absolule justify-end">
              <button className="w-fit p-2 text-sm bg-slate-950 text-slate-200 rounded-lg">
                CTA Here
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="w-full flex flex-wrap gap-4">
        {/* Medium Card 1 */}
        <div className="max-w-80 md:w-full bg-stone-100 text-slate-900 rounded-lg">
          <div className="flex flex-col py-14 px-8 text-center text-slate-900 gap-y-10">
            <div className="self-center bg-[url('./dollar.png')] h-16 w-16 bg-cover bg-center rounded-full"></div>
            <div className="flex flex-col gap-y-5">
              <h2 className="font-bold text-2xl">Heading</h2>
              <p className="">
                Id venenatis a condimentum vitae sapien pellentesque habitant.
                Id venenatis a condimentum vitae sapien pellentesque habitant.
              </p>
            </div>
            <div className="">
              <button className="w-fit py-1 px-5 text-sm bg-slate-950 text-slate-200 rounded-full">
                CTA Here
              </button>
            </div>
          </div>
        </div>
        {/* Medium Card 2 */}
        <div className="h-96 text-white text-center grid bg-cover bg-[url('./pexels-pixabay-57705.jpg')]">
          <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
          <div className="col-start-1 row-start-1 mx-auto my-auto">
            <h1 className="font-bold text-2xl">Hero Message</h1>
            <p>Something interesting about hero message</p>
          </div>
        </div>
      </div>
    </main>
  );
}
