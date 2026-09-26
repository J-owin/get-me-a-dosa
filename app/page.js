import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center gap-4 text-white flex-col h-[44vh] items-center">
        <div className="font-bold text-5xl flex items-center justify-center">Buy Me a Dosa <span><img className="dosa " width={88} src="/dosa.png" alt="" /></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div className="flex gap-4">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Get Started</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Read More</button>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white px-5 py-32 container mx-auto">

        <h2 className="text-3xl font-bold text-center mb-14 ">
          Your fans can buy you a Dosa
        </h2>

        <div className="flex gap-8 mt-6 justify-around">


          <div className="space-y-3 flex flex-col items-center">
            <div className=" size-28 rounded-full bg-slate-500 flex items-center justify-center">
              <img
                src="/working.gif"
                alt="Fund Yourself"
                className="size-40 object-contain"
              />
            </div>

            <p className="mt-2 font-bold text-white">
              Fans want to help
            </p>
            <p>Fans are available to help you</p>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <div className=" size-28 rounded-full bg-slate-500 flex items-center justify-center">
              <img
                src="/coin.gif"
                alt="Fund Yourself"
                className="size-20 object-contain"
              />
            </div>

            <p className="mt-2 font-bold text-white">
              Fans want to help
            </p>
            <p>Fans are available to help you</p>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <div className=" size-28 rounded-full bg-slate-500 flex items-center justify-center">
              <img
                src="/donation.gif"
                alt="Fund Yourself"
                className="size-40 object-contain"
              />
            </div>

            <p className="mt-2 font-bold text-white">
              Fans want to help
            </p>
            <p>Fans are available to help you</p>
          </div>


        </div>


      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white px-5 py-32 container mx-auto items-center  flex justify-center flex-col">

        <h2 className="text-3xl font-bold text-center mb-14 ">
          Learn more about us.
        </h2>

        <iframe width="1026" className="" height="577" src="https://www.youtube.com/embed/QtaorVNAwbI?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w" title="Project GetMeADosa - Patreon Clone in Next.js | Sigma Web Development Course - Tutorial #131" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
