import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import MainFooter from "@/components/MainFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResponseNavBar from "@/components/ResponseNavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const rubik = Rubik({
  subsets: ["latin", "latin-ext", "arabic"], // لدعم اللغة العربية
  weight: ["300", "400", "500", "600", "700", "800", "900"], // أوزان الخط التي تحتاجها
});

export const metadata = {
  title: "Commercial Kitchen Equipment Store | Your Kitchen Center",
  description:
    "Your one-stop Commercial Kitchen online shop for all your professional kitchen equipment needs, delivered straight to your door, UAE",
};

export default function RootLayout({ children }) {
  const CLIENT_ID =
    "141679186178-cr0q9mjrvv3rki27v784imbfh8j2b3km.apps.googleusercontent.com";

  return (
    <html lang="en">
      <body
        className={` pt-[21dvh] overflow-x-hidden bg-white text-black ${rubik.className}`}
      >
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <div className="[@media(max-width:1050px)]:hidden">
            <NavBar className="" />
          </div>
          <div className="hidden [@media(max-width:1050px)]:block">
            <ResponseNavBar />
          </div>
          {children}
          <MainFooter />
          <ToastContainer />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
