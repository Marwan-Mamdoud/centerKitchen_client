"use client";

import React from "react";

const Form = () => {
  return (
    <form className="w-[1200px] mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col w-full items-start justify-start gap-2">
        <label htmlFor="phone" className="text-graycolor">
          Name Product
        </label>
        <input
          type="text"
          className="w-1/2 h-10 border-black/30 outline-none px-2.5 border-2"
        />
      </div>
    </form>
  );
};

export default Form;
