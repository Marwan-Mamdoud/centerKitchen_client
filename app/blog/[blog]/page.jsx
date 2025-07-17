import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

export async function generateMetadata({ params }) {
  const { blog } = params;

  return {
    title: `Blog Item: ${blog}`, // Dynamically setting the title
  };
}

const page = ({ params }) => {
  const { blog } = params;
  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">Blog</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Blog
        </div>
      </div>
      <div className="max-w-[1200px] mt-12">
        <div className=" bg-redcolor w-fit mx-auto mb-5">
          <p className="text-white font-bold px-2.5 py-1 uppercase text-sm">
            Blog
          </p>
        </div>
        <p className="font-bold text-center text-3xl  [@media(max-width:1050px)]:text-xl  [@media(max-width:1050px)]:px-4 px-32 w-fit mx-auto">
          Navigating Dubai’s Kitchen Equipment Sales: A Savvy Shopper’s Guide
        </p>
        <div className=" text-graycolor flex items-center my-5 justify-center text-sm gap-2">
          <p className="">Posted By</p>
          <IoPersonCircleSharp className="w-[25px] h-[25px]" />
          <Link href="#" className="hover:text-gray-500">
            {" "}
            DBXBRANDS
          </Link>
        </div>
        <div className=" max-w-[800px] mx-auto h-full overflow-hidden mb-12 relative">
          <Image
            width={999999}
            height={9999}
            alt="img"
            src="/blog_img.png"
            className="w-full h-full  object-contain"
          />
          <div className="bg-white py-1 absolute z-20 w-[55px] h-fit flex flex-col items-center justify-center top-3 left-3">
            <p className=" font-normal uppercase text-2xl">11</p>
            <p className=" font-bold tracking-wide uppercase text-xs">nov</p>
          </div>
        </div>
        <div className="max-w-[800px]  [@media(max-width:1050px)]:px-4 mx-auto text-gray-400">
          <p className="">
            When it comes to{" "}
            <span className="font-bold">kitchen equipment in Dubai</span>, savvy
            shopping is the key to snagging the best deals without compromising
            quality. Whether you are opening a new restaurant or upgrading your
            existing kitchen, sales can be both exciting and overwhelming. Here,
            we’ll guide you through the essential steps to making informed
            purchases during a sale, ensuring your investment is wise and
            future-proof.
          </p>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Know What You Need
            </p>
            <p className="text-gray-500">
              Before you get lured by the “SALE” signs, take a moment to list
              the kitchen equipment you truly need. Creating a clear checklist
              will help you stay focused and avoid impulse buys that might not
              fit your kitchen’s specific requirements.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Pro Tip:
            </p>
            <p className="text-gray-500">
              Align your purchase with your kitchen’s core needs. If you’re
              unsure, explore this comprehensive guide on setting up a
              commercial kitchen in Dubai for insights.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Check Brand Reputation
            </p>
            <p className="text-gray-500">
              Not all deals offer quality. Research well-known brands like Unox
              or La Marzocco, which are synonymous with durability and
              performance. This ensures your kitchen equipment investment is
              worthwhile, even during a sale.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Understand Features
            </p>
            <p className="text-gray-500">
              A lower price tag doesn’t guarantee satisfaction. Delve into the
              specifications of the kitchen equipment on sale. Make sure it
              meets your business’s capacity and functionality needs. For
              instance, La Marzocco is renowned for its extensive features
              suitable for varying business needs.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Consider the Size
            </p>
            <p className="text-gray-500">
              Space is crucial in every kitchen. Measure your available area and
              compare it with the equipment’s dimensions. Even the best-priced
              kitchen equipment won’t be a bargain if it disrupts your workflow
              due to size issues.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Inspect for Hidden Costs
            </p>
            <p className="text-gray-500">
              Sales may slash upfront costs, but be wary of hidden expenses such
              as delivery, installation, or maintenance fees. These can quickly
              add up, transforming what seemed like a bargain into a costly
              purchase.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Verify Warranty and Return Policies
            </p>
            <p className="text-gray-500">
              Ensure the kitchen equipment on sale comes with a valid warranty
              and check the seller’s return policies. This protects you from
              potential defects or disappointments in your purchase.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Prioritize Energy Efficiency
            </p>
            <p className="text-gray-500">
              Focus on long-term savings by choosing energy-efficient kitchen
              equipment. This not only reduces your utility bills but also
              supports sustainable business practices.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Explore Used or Refurbished Options
            </p>
            <p className="text-gray-500">
              Used or refurbished kitchen equipment can present significant
              savings. However, proceed with caution. Examine them thoroughly
              for any signs of wear and ask about their maintenance history to
              avoid unexpected surprises.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Timing Matters
            </p>
            <p className="text-gray-500">
              Sales vary throughout the year. Wait for major events like Black
              Friday or year-end clearances, which often feature the biggest
              discounts. Patience could lead to even greater savings.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Choose a Reputable Seller
            </p>
            <p className="text-gray-500">
              Your choice of seller impacts your experience. Opt for trusted
              retailers with a reputation for quality service. Saving a few
              bucks with an unknown seller might lead to higher costs in the
              long run.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Why Smart Buying Matters
            </p>
            <p className="text-gray-500">
              Strategic purchasing during kitchen equipment sales in Dubai can
              secure top-quality items without overspending. It’s not just about
              getting a deal; it’s about enhancing your kitchen’s efficiency and
              performance.
            </p>
          </div>
          <div className="my-6">
            <p className="text-black text-2xl  [@media(max-width:1050px)]:text-base font-bold mb-6">
              Conclusion
            </p>
            <p className="text-gray-500">
              Sales are more than just opportunities—they’re tests of your
              decision-making skills. By understanding your needs, researching
              thoroughly, and considering long-term benefits, you can make
              intelligent purchases that align with your goals. Whether running
              a restaurant, café, or catering business, choosing the right
              kitchen equipment is an investment in your success.
            </p>
          </div>
          <p className="text-gray-500 mb-12">
            Ready to elevate your kitchen setup? Start by exploring high-quality
            options that fit your needs. For more expert tips, check out this
            article on why high-quality commercial kitchen equipment is
            essential for gourmet restaurants. <b> Happy shopping!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
