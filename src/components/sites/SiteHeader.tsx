import Link from "next/link";
import SiteSearchBox from "./SiteSearchBox";
import SiteSettings from "./SiteSettings";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <div className="bg-white border border-neutral-300 shadow-md h-14 p-3 fixed top-0 left-0 right-0 z-20">
      <div className="flex justify-between items-center">
        <div className="w-8 h-8 mr-2">
          <Link className="flex justify-center items-center w-8 h-8" href="/" title="WeatherApp">
            <Image src="/images/logo.svg" width={28} height={28} alt="Logo" />
          </Link>
        </div>
        <div className="flex-1 sm:max-w-96">
          <SiteSearchBox />
        </div>
        <div className="w-8 h-8 ml-2">
          <SiteSettings />
        </div>
      </div>
    </div>
  );
}
