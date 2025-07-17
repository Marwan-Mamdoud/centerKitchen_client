import Link from "next/link";

const Page = () => {
  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl [@media(max-width:1050px)]:text-3xl">
          Innovations
        </p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Innovations
        </div>
      </div>
      <div className="max-w-[1200px] py-28 mx-auto [@media(max-width:1050px)]:grid-cols-1 [@media(max-width:1050px)]:px-5 grid grid-cols-3 gap-10">
        <div className="w-full h-[220px]">
          <iframe
            src="https://www.youtube.com/embed/8OxjW4fVmvE"
            className=" w-[100%] h-[100%] "
          ></iframe>
        </div>
        <div className="w-full h-[220px]">
          <iframe
            src="https://www.youtube.com/embed/5s5qeRWAKtE"
            className=" w-[100%] h-[100%] "
          ></iframe>
        </div>
        <div className="w-full h-[220px]">
          <iframe
            src="https://www.youtube.com/embed/OL8xl4K-IzI"
            className=" w-[100%] h-[100%] "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
