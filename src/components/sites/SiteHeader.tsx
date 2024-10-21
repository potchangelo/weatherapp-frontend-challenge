import { Search } from "lucide-react";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="bg-white border border-neutral-300 shadow-md h-14 p-3 fixed top-0 left-0 right-0 z-20">
      <div className="flex justify-between items-center">
        <div className="w-10 h-8 flex-shrink-0 mr-2">
          <Link href="/">WA</Link>
        </div>
        <div className="flex-1 max-w-80">
          <div className="relative">
            <form>
              <input className="flex w-full h-8 rounded-md border border-neutral-600 text-sm px-3 py-2 focus:outline focus:outline-purple-600" type="search" placeholder="search" />
              <button className="absolute flex justify-center items-center top-0 right-0 w-8 h-8" type="submit">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
