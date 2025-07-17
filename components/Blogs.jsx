"use client";
import BlogModel from "@/components/BlogModel";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Blogs = () => {
  const data = [
    <BlogModel key={1} />,
    <BlogModel key={2} />,
    <BlogModel key={3} />,
    <BlogModel key={4} />,
    <BlogModel key={5} />,
    <BlogModel key={6} />,
    <BlogModel key={7} />,
    <BlogModel key={8} />,
    <BlogModel key={9} />,
  ];
  let perpage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * perpage;
  const currentItems = data.slice(offset, offset + perpage);
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
  };
  return (
    <>
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">Blog</p>
      </div>
      <div className="max-w-[1200px] grid grid-cols-3  [@media(max-width:1050px)]:grid-cols-1 gap-5 my-12 mx-auto">
        {currentItems.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" "
        pageRangeDisplayed={perpage}
        onPageChange={handlePageClick}
        pageClassName=" hover:bg-gray-200 px-3 py-2"
        activeClassName="bg-redcolor hover:bg-redcolor hover:cursor-default text-white "
        pageCount={Math.ceil(data.length / perpage)}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex items-center  gap-5 font-semibold justify-center my-12"
      />
    </>
  );
};

export default Blogs;
