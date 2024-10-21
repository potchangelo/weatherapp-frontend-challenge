export default function WeatherDetailsNow() {
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h3 className="text-2xl font-semibold mb-2">New York</h3>
      <p className="text-sm mb-1">Thursday, 22 May 2019</p>
      <p className="text-sm mb-6">7:30 AM</p>
      <div className="flex flex-col items-center mb-6">
        <figure className="bg-neutral-400 rounded-full w-28 h-28 mb-3"></figure>
        <h2 className="text-5xl font-semibold mb-1">18&deg;</h2>
        <p className="text-sm">Clear</p>
      </div>
      <div className="flex justify-between">
        <div className="text-neutral-500 text-sm">MIN 18&deg;</div>
        <div className="text-neutral-500 text-sm">MAX 26&deg;</div>
      </div>
    </div>
  );
}
