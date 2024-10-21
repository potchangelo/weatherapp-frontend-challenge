import Link from "next/link";

export default function WeatherItem() {
  return (
    <Link href="/details/111" className="bg-white border border-neutral-200 rounded-md shadow-md flex justify-between items-start px-4 py-2">
      <div className="flex-1 mr-2">
        <h3 className="font-semibold">New York</h3>
        <p className="text-neutral-500 text-sm">8:30 AM</p>
      </div>
      <div className="flex items-center flex-shrink-0 pt-2">
        <figure className="bg-neutral-400 rounded-full inline-block w-6 h-6 mr-2"></figure>
        <span className="text-xl">18&deg;</span>
      </div>
    </Link>
  );
}
