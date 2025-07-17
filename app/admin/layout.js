"use client";
import NavBar from "@/components/NavBar";
import ResponseNavBar from "@/components/ResponseNavBar";
import { Vefiry } from "@/lib/APIS";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const Protect = async () => {
      setLoading(true);
      const data = await Vefiry();
      console.log(data);

      if (data) {
        setLoading(false);
        return;
      } else {
        setLoading(false);
        return router.push("/");
      }
    };
    Protect();
  }, []);

  return (
    <div>
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold uppercase text-5xl">Adim</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Adim
        </div>
      </div>
      <div className="[@media(max-width:1050px)]:hidden">
        <NavBar className="" />
      </div>
      <div className="hidden [@media(max-width:1050px)]:block">
        <ResponseNavBar />
      </div>
      {loading ? <div>Loading....</div> : { ...children }}
    </div>
  );
}
