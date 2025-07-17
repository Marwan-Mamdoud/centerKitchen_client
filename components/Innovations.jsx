const Innovations = () => {
  return (
    <div className="max-w-[1200px] h-fit my-5 mb-20 mx-auto ">
      <div className="w-full border-b-0 py-16 mt-10  flex-col border-gray-200 flex items-center justify-center">
        <span className="font-bold text-3xl text-black z-10  border-b-redcolor border-b-2 pb-3  text-center">
          {" "}
          Innovations
        </span>
        <hr className="h-[1px] -translate-y-[160%] -z-10 border-0 w-full bg-gray-200" />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 w-[100%] [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:h-[800px] h-[210px] gap-10 items-center justify-items-center">
        <div className="w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/8OxjW4fVmvE"
            className=" w-[100%] h-[100%] "
          ></iframe>
        </div>
        <div className="w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/5s5qeRWAKtE"
            className=" w-[100%] h-[100%] "
          ></iframe>
        </div>
        <div className="w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/OL8xl4K-IzI"
            className=" w-[100%] h-[100%] "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
