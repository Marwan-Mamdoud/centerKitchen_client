import FeaturedCategories from "@/components/FeaturedCategories";
import FooterMails from "@/components/FooterMails";
import HotDeals from "@/components/HotDeals";
import ImagesSlides from "@/components/ImagesSlides";
import Innovations from "@/components/Innovations";
import NewProducts from "@/components/NewProducts";
import OurBrand from "@/components/OurBrand";

export default function Home() {
  return (
    <div className="h-full">
      <ImagesSlides />
      <FeaturedCategories />
      <NewProducts />
      <HotDeals />
      <OurBrand />
      <Innovations />
      <FooterMails />
    </div>
  );
}
