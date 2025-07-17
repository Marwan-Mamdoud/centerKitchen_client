"use client";
import React, { useState } from "react";
import NewProduct from "./NewProduct";
import ReactPaginate from "react-paginate";
import SetId from "@/store/SetId";

const Products = ({ perpage, products, description }) => {
  const { setId } = SetId();
  const Products = products?.map((item, index) => {
    return (
      <div key={index} className="" onClick={() => setId(item._id)}>
        <NewProduct link={`/category_products/${item._id}`} product={item} />
      </div>
    );
  });
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * perpage;
  const currentItems = Products?.slice(offset, offset + perpage);
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <div className="w-full">
        {currentItems?.length == 0 ? (
          <div className="font-black text-4xl w-fit mx-auto uppercase tracking-wider [@media(max-width:1050px)]:ml-5 [@media(max-width:1050px)]:text-2xl  mb-48 my-24">
            No Products Founded
          </div>
        ) : (
          <div className="grid grid-cols-3 w-full gap-3 [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-wrap  [@media(max-width:1050px)]:w-full mx-auto items-center justify-center px-3 pt-9">
            {currentItems?.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          pageRangeDisplayed={perpage}
          onPageChange={handlePageClick}
          pageClassName=" hover:bg-gray-200 px-3 py-2"
          activeClassName="bg-redcolor hover:bg-redcolor hover:cursor-default text-white "
          pageCount={Math.ceil(Products?.length / perpage)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex items-center font-semibold justify-center my-12"
        />
      </div>
      <div
        className="description ml-5"
        dangerouslySetInnerHTML={{
          __html: description?.en,
        }}
      />{" "}
      {/* <div className="flex flex-col items-start justify-center gap-5 text-sm text-graycolor">
        <p className="first-letter:uppercase">
          Elevate your coffee service with top-of-the-line commercial coffee
          machines from Your Kitchen Center. We offer a comprehensive range of
          professional coffee machines. They are perfect for cafes, restaurants,
          and offices in Dubai and the UAE. Our collection includes espresso
          machines, coffee grinders, and brewers from leading brands. This
          ensures you deliver the perfect cup of coffee every time. Whether you
          want to serve a simple espresso or a complex cappuccino, we have the
          right equipment to meet your needs.
        </p>
        <p className="first-letter:uppercase">
          Our range of commercial coffee machines, including options from La
          Marzocco and Slayer, ensures perfect coffee delivery for cafes and
          restaurants. Whether you need a semi-automatic espresso machine or
          coffee brewers, our collection caters to all your coffee service
          needs.”
        </p>
        <p className="first-letter:uppercase font-bold text-2xl text-black">
          Confused in Choosing Coffee Machine?
        </p>
        <p className="first-letter:uppercase">
          we understand that quality and reliability are crucial in a busy
          coffee shop environment. Therefore, we stock only robust,
          easy-to-maintain machines capable of withstanding heavy use. Moreover,
          our expert team is available to provide support and advice, helping
          you choose the best coffee machine for your business. Explore our
          range today and take your coffee service to the next level with Your
          Kitchen Center. We are your trusted source for commercial kitchen
          equipment in Dubai and the UAE.
        </p>
      </div> */}
    </>
  );
};

export default Products;
