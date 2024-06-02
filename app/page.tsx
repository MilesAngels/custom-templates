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
        <div className="max-w-64 h-96 text-white text-center grid bg-cover bg-[url('./pexels-pixabay-57705.jpg')] content-end">
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
        <div className="max-w-64 h-96 md:w-full bg-stone-100">
          <div className="flex flex-col px-6 py-9 text-slate-900 gap-8">
            <div className="self-center bg-[url('./pexels-pixabay-57705.jpg')] h-24 w-24 bg-cover bg-center rounded-full"></div>
            <h2 className="font-bold text-lg">Heading</h2>
            <p>
              Id venenatis a condimentum vitae sapien pellentesque habitant.
            </p>
            <div className="flex justify-end">
              <button className="w-fit text-sm font-bold text-slate-900 rounded-lg">
                <Link href="#">CTA Here &#x2192;</Link>
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
          <div className="col-start-1 row-start-1 m-auto px-3">
            <h1 className="font-bold text-2xl">Hero Message</h1>
            <p>Something interesting about hero message</p>
          </div>
        </div>
        {/* Medium Card 3 */}
        <div className="flex max-w-lg bg-stone-100 text-slate-900 h-full">
          <div className="w-2/5 bg-[url('./pexels-pixabay-326055.jpg')] h-42 bg-cover bg-center"></div>
          <div className="flex flex-col p-5 w-3/5">
            <h2 className="mb-4 font-bold text-lg">Heading</h2>
            <p>
              Id venenatis a condimentum vitae sapien pellentesque habitant. Id
              venenatis a condimentum vitae sapien pellentesque habitant.
            </p>
            <div className="mt-4 flex justify-end">
              <button className="w-fit text-sm font-bold text-slate-900 rounded-lg">
                <Link href="#">CTA Here &#x2192;</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div className="flex flex-col max-w-sm bg-stone-100 text-slate-900 py-5 gap-5">
          <div className="flex gap-5">
            <h2 className="text-3xl font-black p-4">$17/mo</h2>
            <h3 className="text-2xl bg-slate-900 text-slate-100 text-center rounded-s-full p-5 w-72">
              BASIC
            </h3>
          </div>
          <div className="p-4">
          <h4>Enjoy these features:</h4>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
        </div>
      </div>
    </main>
  );
}
