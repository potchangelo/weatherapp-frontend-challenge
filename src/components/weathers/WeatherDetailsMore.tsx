export default function WeatherDetailsMore() {
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h5 className="text-neutral-500 text-sm font-semibold mb-3">CURRENT DETAILS</h5>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Humidity:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">65%</p>
        </div>
      </div>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Wind:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">12 km/h</p>
        </div>
      </div>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Pressure:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">1,024 mBar</p>
        </div>
      </div>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Chance of rain:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">62%</p>
        </div>
      </div>
    </div>
  );
}
